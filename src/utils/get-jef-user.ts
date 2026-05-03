import { User } from 'discord.js';
import client from '../main';
import { JEF_ID } from '../../constants';

export function getJefUser(): User | undefined {
  const userId = JEF_ID;
  // get user from client
  const user = client.users.cache.get(userId);
  return user;
}
