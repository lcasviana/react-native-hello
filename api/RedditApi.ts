import axios from 'axios';

export class RedditApi {
  static async getByTag(tag: string): Promise<any> {
    try {
      return await axios.get(`https://reddit.com/r/${tag}.json`);
    } catch (err) {
      console.error(err);
    }
  }
}