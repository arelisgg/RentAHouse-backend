import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { User, UserDocument } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user-inputs.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    try {
      const isUser = await this.UserModel.findOne({
        email: createUserInput.email,
      });
      if (isUser) {
        throw new GraphQLError('Nah Bro, you already exist 🤡');
      } else {
        createUserInput.password = await bcrypt
          .hash(createUserInput.password, 10)
          .then((r) => r);
        return await new this.UserModel(createUserInput).save();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async login({ password, email }) {
    try {
      const res = await this.UserModel.findOne({ email });
      return res && (await bcrypt.compare(password, res.password))
        ? this.getToken(email, res._id).then((result) => result)
        : new GraphQLError('Nah Bro, you already exist 🤡');
    } catch (err) {
      console.error(err);
    }
  }

  async getToken(email, _id): Promise<string> {
    try {
      return await this.jwtService.signAsync({ email, _id });
    } catch (err) {
      console.error(err);
    }
  }

  async findAll() {
    try {
      return await this.UserModel.find().exec();
    } catch (err) {
      console.error(err);
    }
  }

  async findOne(_id: Types.ObjectId) {
    try {
      return await this.UserModel.findById(_id).exec();
    } catch (err) {
      console.error(err);
    }
  }

  async update(_id, updateUserInput: UpdateUserInput) {
    try {
      return await this.UserModel.findByIdAndUpdate(_id, updateUserInput, {
        new: true,
      }).exec();
    } catch (err) {
      console.error(err);
    }
  }

async updatePassword(_id, userPass, newPass) {
    try {
      const User = await this.UserModel.findById({ _id: _id });
      if (await bcrypt.compare(userPass, User.password)) {
        User.password = await bcrypt.hash(newPass, 10);
        return await new this.UserModel(User).save();
      }
    } catch (err) {
      console.error(err);
    }
  }

  async remove(_id: string) {
    try {
      return await this.UserModel.findByIdAndDelete(_id).exec();
    } catch (err) {
      console.error(err);
    }
  }
}

