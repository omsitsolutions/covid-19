import React from "react";
import {Card,Avatar,Link, CardContent, CardHeader, Divider, Grid, Icon, IconButton, Typography} from "@material-ui/core";



export const About = (props) => {
    return (
        <Grid spacing={true} container={true}>
            <Grid xs={12} item={true}>
                <Card>
                    <CardHeader title={"OMS IT SOLUTIONS"}/>
                    <CardContent>

                        <Avatar src={"https://scontent-maa2-1.xx.fbcdn.net/v/t1.0-9/91262172_3588150361255721_2874790871578968064_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=dHh43fuK8n0AX_6fRWr&_nc_ht=scontent-maa2-1.xx&oh=34d01c08e9da9ed2843962fc4e053f72&oe=5EE0AD76"}/>
                        <Typography variant={"subtitle1"}>Simpilfy your life. Life is precious!!!</Typography>
                        <Typography variant={"caption"} component={"p"}>Follow me</Typography>
                        <IconButton color={"primary"} href={""} target={"_blank"} onClick={e=>{
                            window.open("https://www.facebook.com/omsitsolutions", "_blank")
                        }}>
                            <Icon fontSize={"default"} className="fa fa-facebook-f"/>
                        </IconButton>
                        <IconButton color={"primary"} href={""} target={"_blank"} onClick={e=>{
                            window.open("http://omsitsolutions.com","_blank")
                        }}>
                            <Icon fontSize={"default"} className="fa fa-globe"/>
                          </IconButton>
                        <IconButton color={"primary"} href={""} target={"_blank"} onClick={e=>{
                            window.open("https://g.page/omsitsolutions","_blank")
                        }}>
                            <Icon fontSize={"default"} className="fa fa-google"/>
                        </IconButton>


                    </CardContent>
                </Card>
            </Grid>
            <Grid xs={12} item={true}>
                <Divider/>
            </Grid>
            <Grid xs={12} item={true}>
                <Card>
                    <CardHeader title={"Resource"}/>
                    <CardContent>
                        <Typography   variant={"subtitle1"}>Material UI: <Link href="https://material-ui.com">
                            https://material-ui.com
                        </Link>
                        </Typography>
                        <Typography   variant={"subtitle1"}>COVID19 INDIA ORG: <Link href="https://www.covid19india.org/">
                            https://www.covid19india.org
                        </Link>
                        </Typography>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
