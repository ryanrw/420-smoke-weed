import { NowRequest, NowResponse } from "@vercel/node";

export default (_req: NowRequest, res: NowResponse) => {
  res.setHeader("X-Powered-By", "weedSmoker");

  return res.status(420).json({
    snoopD_O_GG_Say: "sMokeW33dEvErydaY",
  });
};
