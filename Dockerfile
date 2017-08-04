FROM node:8-alpine
COPY . /app
WORKDIR /app
ENV NODE_ENV=production

# install dependencies to run the app the note: typescript is also installed.
# including typescript in dependencies and not devDependencies simplifies this
# build process because we do not need a previous compile step
RUN yarn install

# compiles typescript to build folder
RUN yarn build

# run the app
ENTRYPOINT ["yarn", "serve"]
