import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";


const orderstatus = [

    { lable: "On The Way", value: "on_the_way" },
    { lable: "Delivered", value: "delivered" },
    { lable: "Cancle", value: "cancle" },
    { lable: "Returned", value: "returned" }

]
const Order = () => {
    return (
        <div className="lg:px-20 px-5">
            <Grid container spacing={0} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={2.5}>
                    <div className="h-auto shadow-lg bh-white p-5 sticky top-5">
                        <h1 className="font-bold text large ">Filter</h1>
                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">ORDER STATUS</h1>
                            {orderstatus.map((option) => <div className="flex items-center">
                                <input defaultValue={option.value} type="checkbox" className="h-4 w-4 border-grey-300 text-indigo-600 focus:ring-indigo-500" />
                                <label className="ml-3 text-sm text-grey-600" htmlfor={option.value}>
                                    {option.lable}
                                </label>
                            </div>)}

                        </div>
                    </div>
                </Grid>
                <Grid item xs={9}> 
                    <div className="=space-y-5">
                        {/* {[1,1,1,1,1,1].map((item)=> <OrderCard/>)} */}
                        <OrderCard/>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}
export default Order