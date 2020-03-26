const Form = require("../models/Form");

module.exports = {
  async post(req, res) {
    const { nome, idade, rg, cpf, email } = req.body;

    form = await Form.create({
      nome,
      idade,
      rg,
      cpf,
      email
    });
    return res.json(form);
  },

  async get(req, res) {
    const response = await Form.find();

    return res.json(response);
  },

  async delete(req, res) {
    const form = await Form.findByIdAndDelete(req.params.id);

    return res.json(form);
  }
};
