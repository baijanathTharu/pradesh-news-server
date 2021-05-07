const getAllPradesh = require('../../lib/getAllPradesh');
const getPradesh = require('../../lib/getPradesh');

const getAllPradeshCtrl = async (req, res, next) => {
  // return all pradesh
  const pradeshes = await getAllPradesh();

  res.json(pradeshes);
};

const getPradeshCtrl = async (req, res, next) => {
  const id = parseInt(req.params.id);

  if (id > 7) throw { msg: `Pradesh with id - ${id} not found`, status: 401 };

  const pradesh = await getPradesh(id);

  res.json({ pradesh });
};

module.exports = { getAllPradeshCtrl, getPradeshCtrl };
