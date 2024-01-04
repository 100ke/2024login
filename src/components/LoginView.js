import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { postLogin } from "../api/api";

function LoginView() {
    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = new FormData(e.target)
        const useremail = data.get("username")
        const password = data.get("password")

        postLogin({email:useremail, password:password})

    }

    return(
        <Container component="main" maxWidth="xs" className="container">
            <Grid container spacing={5}>
                <Grid item xs={12} style={{marginBottom:"10px"}}>
                    <Typography component="h3" variant="h5">로그인</Typography>
                </Grid>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} style={{marginBottom:"10px"}}>
                    <Grid item xs={12}>
                        <TextField variant="outlined" 
                        id="username" label="아이디" 
                        name="username" autoComplete="username" 
                        fullWidth required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" 
                        id="password" label="비밀번호" 
                        name="password" autoComplete="password" 
                        fullWidth required
                        />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" fullWidth 
                    variant="contained" color="primary">
                        로그인
                    </Button>
                </Grid>
            </form>
        </Container>
    )
}

export default LoginView;