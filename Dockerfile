FROM node:16

WORKDIR /usr/src/app

COPY . .
RUN npm install
# RUN npm run build
CMD ["npm", "run", "dev"]



# docker build -t nextjs .
# docker run -dp 3000:3000 nextjs
# docker ps