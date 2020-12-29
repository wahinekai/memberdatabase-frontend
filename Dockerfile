# pull official base image
FROM node:alpine as build

# set working directory
WORKDIR /app

# Copy the dependencies files
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy remaining files
COPY src src
COPY public public

# Copy configuration files
COPY .prettierrc.json .prettierrc.json
COPY .eslintignore .eslintignore
COPY .eslintrc .eslintrc
COPY tsconfig.json tsconfig.json

# Custom build argument
ARG REACT_APP_CUSTOM_NODE_ENV

# Build the project for production
RUN REACT_APP_CUSTOM_NODE_ENV=${REACT_APP_CUSTOM_NODE_ENV}\
    npm run build

# Run Stage Start
FROM nginx

EXPOSE 80

# --------- only for those using react router ----------
# if you are using react router
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d

#Copy production build files from builder phase to nginx
COPY --from=build /app/build /usr/share/nginx/html
