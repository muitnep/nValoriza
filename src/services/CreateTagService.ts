import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories";


class CreateTagService {
  async execute(name: String) {
    const tagsRepositories = getCustomRepository(TagsRepositories);  

    if(!name) {
      throw new Error("Invalid name!");
    } 

    const tagAlreadyExists = await tagsRepositories.findOne({
      name,
    });

    if(tagAlreadyExists) {
      throw new Error ("Tag Already Exists!")
    }

    const tag = tagsRepositories.create({
      name,
    })

    await tagsRepositories.save(tag);

    return tag;

  }
}

export {CreateTagService}