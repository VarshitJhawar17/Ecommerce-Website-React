import { Avatar, Rating } from "@mui/material";
import React from "react";
import {Box} from "@mui/material";
import {Grid} from "@mui/material";
const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className="text-white" sx={{width:56,height:56,bgcolor:"#9155fd"}}></Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className="space-y-2">
                        <div>
                            <p className="font-semibold text-lg">Varshit</p>
                            <p className="opacity-70">17-11-2005</p>
                        </div>

                    </div>

                    <Rating value={0.5} name="half-rating" readOnly/>
                    <p className="">Nice Product I love this search</p>
                </Grid>

            </Grid>
        </div>
    )
}
export default ProductReviewCard