const Food = require("../models/Food");

class FoodsService {
    async createFood(foodCreateData, useId) {
        if (!foodCreateData.label) {
            throw ApiError.BadRequest('Fill in the field');
        }

        const food = await new Food({...foodCreateData, owner: useId});
        await food.save();

        return food;
    }

    async addFood() {

    }
    async getFoods(userId) {
        const foods = await Food.find({owner: userId});
        return foods;
    }
}

module.exports = new FoodsService();