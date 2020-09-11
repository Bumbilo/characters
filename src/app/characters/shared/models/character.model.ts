import {Location} from './location.model';

export class Character {
  constructor(
    public created: string,
    public gender: string,
    public name: string,
    public image: string,
    public location: Location,
    public origin: { name: string, url: string },
    public species: string,
    public status: string,
    public type: string,
    public url: string,
    public episode: Array<string>,
    public id?: number,
  ) {
  }
}
