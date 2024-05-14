const { Op } = require('sequelize');
class APIFeatures {
  constructor(model, queryString) {
    this.model = model;
    this.queryString = queryString;
  }
  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit'];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);

    queryStr = queryStr.replace(
      /\b(gte|gt|lte|lt)\b/g,
      (match) => `[Op.${match}]`,
    );

    const attributes = JSON.parse(queryStr);

    const whereClause = {};
    let sortBy = {};
    for (const key in attributes) {
      whereClause[key] = attributes[key];
    }
    if (this.queryString.sort) {
      sortBy = this.queryString.sort.split(',').map((field) => {
        if (field.startsWith('-')) {
          return [field.slice(1), 'DESC'];
        } else {
          return [field, 'ASC'];
        }
      });
    } else {
      sortBy = [['createdAt', 'ASC']];
    }

    if (this.queryString.limit) {
      const limit = parseInt(this.queryString.limit);
      this.query = this.model.findAll({
        where: whereClause,
        order: sortBy,
        limit: limit,
      });
    } else {
      console.log('out');
      this.query = this.model.findAll({
        where: whereClause,
        order: sortBy,
        separate: true,
      });
    }
    return this;
  }
}
module.exports = APIFeatures;
