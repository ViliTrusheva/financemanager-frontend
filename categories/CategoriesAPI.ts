import { CategoriesEntity } from "../categories/CategoriesEntity";
import axios from "axios";

export class CategoriesAPI {
  static baseUrl = "http://127.0.0.1:3000/categories";

  static async getCategories() {
    const response = await axios.get<CategoriesEntity[]>(this.baseUrl);

    return response.data;
  }

  static async createCategory(category: CategoriesEntity) {
    console.log("calling " + CategoriesAPI.baseUrl);

    const response = await fetch(CategoriesAPI.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
  }
}
