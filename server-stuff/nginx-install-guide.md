# Full tutorial 
[Tutorial Link](https://www.datanovia.com/en/lessons/digitalocean-how-to-install-nginx-and-ssl/)

# Digital Ocean
Setup of the domain
```text
maxvamp.com
```
and sub domains (As A records under the maxvamp.com domain)
```text
analytics.maxvamp.com ghost.maxvamp.com remark.maxvamp.com
```

# Install nginx
```shell
sudo apt-get update
sudo apt-get -y install nginx
```

#  Install Snap package manager
```shell
sudo snap install core; sudo snap refresh core
```
#  Install Certbot
```shell
sudo snap install --classic certbot
```
#### When asked for  the domains use this
```text
maxvamp.com analytics.maxvamp.com ghost.maxvamp.com
```
```shell
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

# Configure Certbot SSL
```shell
sudo certbot --nginx
```

# Allow HTTPS through your firewall
```shell
sudo ufw allow 'Nginx Full'
sudo ufw allow 'Nginx HTTP'
```

# Open crontab
```shell
sudo crontab -e
```
# Add this
```
 15 3 * * * /usr/bin/certbot renew --quiet
```

# To add a new domain 
```shell
sudo certbot certonly --expand -d maxvamp.com,remark.maxvamp.com
```
and the afterwards rerun 
```shell
sudo certbot --nginx
```
and then
```shell
sudo service nginx restart
```