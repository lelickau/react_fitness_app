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

    async deleteFood(userId, foodId) {
        const food = await Food.findOne({_id: foodId, owner: userId});
        if (!food) {
            throw ApiError.BadRequest('Error trying to delete. File not found.');
        }
        await food.remove();
    }
}

module.exports = new FoodsService();