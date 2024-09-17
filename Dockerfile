
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
