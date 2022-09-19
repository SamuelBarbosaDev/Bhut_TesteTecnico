import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import './index.css'



interface IAppDrawerMenu{
    children: React.ReactNode
}

export const DrawerMenu: React.FC <IAppDrawerMenu> = ({ children }) => {
  const theme = useTheme();


  return (
        <>
        <Drawer variant='permanent'>
            
            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

            <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                <Avatar
                sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
                src="https://avatars.githubusercontent.com/u/100852857?v=4"
                />

            </Box>

            <Divider />

            <Box flex={1}>
                <List component="nav">

                <a href="/bhut-react">
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon>home</Icon>
                        </ListItemIcon>

                        <ListItemText primary="Home" />
                    </ListItemButton>
                </a>


                <a href="https://www.instagram.com/samuelbarbosa_dev/" target='_black'>
                    <ListItemButton>
                        <ListItemIcon>
                            <InstagramIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Instagram" />
                    </ListItemButton>
                </a>

                <a href="https://github.com/SamuelBarbosaDev" target='_black'>
                    <ListItemButton>
                        <ListItemIcon>
                            <GitHubIcon/>
                        </ListItemIcon>

                        <ListItemText primary="GitHub" />
                    </ListItemButton>
                </a>


                </List>
            </Box>

            </Box>
        </Drawer>

        <Box height="100vh" marginLeft={theme.spacing(28)}>
            {children}
        </Box>
        </>
    );
};