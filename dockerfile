FROM node:18-alpine
 
WORKDIR /app
 
COPY server.js index.html ./
 
RUN npm install express
 
EXPOSE 3000
 
CMD ["node", "server.js"]
