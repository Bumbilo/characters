FROM node:12
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli@latest
COPY . .

RUN npm install
EXPOSE 4200
CMD ["ng","serve", "--host", "0.0.0.0"]
