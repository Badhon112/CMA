import express, { Request, Response } from "express";
import { validate } from "../../middleware/validate_middleware";
import { contractValidator } from "../../validators/Contract_validator";
import User from "../../model/users";

const router = express.Router();

router.route("/getAllUser").get(async (req: Request, res: Response) => {
  try {
    let allusers = await User.find();
    res.status(200).json({
      success: true,
      message: "All User",
      allusers,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to fetch All User",
    });
  }
});

router
  .route("/create")
  .post(validate(contractValidator), async (req: Request, res: Response) => {
    try {
      const { name, email, phone, address, photourl } = await req.body;
      let user = await User.findOne({
        email,
      });
      if (user) {
        return res.status(400).json({ msg: "User Already exists" });
      }
      user = new User({ name, email, phone, address, photourl });
      await user.save();
      return res.status(200).send({ msg: "User Registerd Ok" });
    } catch (error) {
      res.status(404).json({ msg: "Error While Creating", error });
    }
  });

router.route("/delete/:id").delete(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({
        success: true,
        message: "Users Not founds",
      });
    }
    await user?.deleteOne();
    res.status(200).json({
      success: true,
      message: "User Deleted!",
      user,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "failed to Delete User",
    });
  }
});

router
  .route("/update/:id")
  .put(validate(contractValidator), async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      // const { name, email, phone, address, photourl } = await req.body;
      // let user = await User.findById({
      //   _id: id,
      // });
      // if (!user) {
      //   return res.status(400).json({ msg: "User dosn't exists" });
      // }
      // let newuser = new User({ name, email, phone, address, photourl });
      // user = await User.findByIdAndUpdate(id, newuser);
      // return res.status(200).send({ msg: "User Updated succefully" });
      const user = await User.findByIdAndUpdate({ _id: id }, req.body, {
        new: true,
      });
      res.status(200).send({ msg: "User Updated succefully", user });
    } catch (error) {
      res.status(404).json({ msg: "Error While Updating", error });
    }
  });
router.route("/getSingleUser/:id").get(async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const singleUser = await User.findById({ _id: id });
    res.status(200).send({ msg: "User Updated succefully", singleUser });
  } catch (error) {
    res.status(404).json({ msg: "Error While Updating", error });
  }
});

export default router;