FROM node:16-alpine AS build

WORKDIR /app

COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@14.1.3

COPY . /app
RUN npm run build
EXPOSE 4200

CMD ng serve --host 0.0.0.0

# FROM node:16.10

# # install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'


# # set working directory
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install and cache app dependencies
# COPY package.json /app/package.json
# RUN npm install
# RUN npm install -g @angular/cli@7.3.9

# # add app
# COPY . /app
# EXPOSE 4200
# # start app
# CMD ng serve --host 0.0.0.0
