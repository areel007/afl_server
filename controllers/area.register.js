const AreaRegister = require("../models/area.register")

exports.createAreaRegister = async (req, res) => {
  try {
    const {firstname, lastname, email, phone, area} = req.body
  const newArea = await AreaRegister({
    firstname,
    lastname,
    email,
    phone,
    area
  })

  newArea.save()

  res.status(201).json({
    success: 'true',
    msg: "Your area has been successfully registered"
  })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error,
    })
  }
}

exports.getAreas = async (req, res) => {

  try {
    const areas = await AreaRegister.find()
    res.status(200).json({
      status: "success",
      msg: areas
    })
  } catch (error) {
    res.status(500).json({
      status: 'fail',
      error
    })
  }
}