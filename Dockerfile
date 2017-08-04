FROM node:8-alpine
COPY . /app
WORKDIR /app
ENV NODE_ENV=production

# install devDependencies to be able to compile the typescript files
# will result in a bigger image but whatever..
RUN yarn install --production=false

# compile typescript files to build folder
RUN yarn build

# run the app
ENTRYPOINT ["yarn", "serve"]
