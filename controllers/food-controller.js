const foodsService = require("../service/foods-service");

class FoodsController {
    async createFood(req, res, next) {
        try {
            const foodCreateData = req.body;
            const {id} = req.user;

            const foodData = await foodsService.createFood(foodCreateData, id);
            return res.json(foodData);
        } catch (e) {
            next(e)
        }
    }

    async addFood(req, res, next) {
        try {

        } catch (e) {
            next(e)
        }
    }

    async getFoods(req, res, next) {
        try {
            const {id} = req.user;
            const foodsData = await foodsService.getFoods(id);

            return res.json(foodsData);
        } catch (e) {
            next(e)
        }
    }

    async deleteFood(req, res, next) {
        try {
            const {id} = req.user;
            const foodId = req.query.id;
            console.log(id, foodId);
            const foodData = await foodsService.deleteFood(id, foodId);

            return res.json(foodData);

        } catch (e) {
            next(e)
        }
    }

}

module.exports = new FoodsController();