import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { CartData } from "./CartData";

const OrderCard = () => {
    return (
        <div className="pt-[120px] p-5 shadow-md shadow-black hover:shadow-2xl">
            {CartData.map((CartData) => {
                return <Grid container spacing={2} sx={{ justifyContent: "space-between" }} >
                    <Grid item xs={6}>
                        <div className="flex curser-pointer ">
                            <img className="w-[5rem] h-[5rem] object-cover object-top" src={CartData.image} alt="" />
                            <div className="ml-5 space-y-2">
                                <p >{CartData.name}</p>
                                <p className="opacity-50 text-xs font-semibold">size:{CartData.size}</p>
                                <p className="opacity-50 text-xs font-semibold">color:{CartData.color}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        Rs.{CartData.price}
                    </Grid>
                    <Grid item xs={4}>
                        {true && <div> <p>
                            <AdjustIcon sx={{ width: "15px", height: "15px" }} className="text-green-600 mr-2 text-sm" />
                            <span>
                                Delivered on {CartData.deliveryDate}
                            </span>
                        </p>
                            <p className="text-xs">
                                Your Item Has Been Delivered
                            </p>
                        </div>}
                        {false && <p>
                            <span>
                                Expected Delivery on November 17
                            </span>
                        </p>}
                    </Grid>


                </Grid>
            })}
        </div>
    )
}
export default OrderCard