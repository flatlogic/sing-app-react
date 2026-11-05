FROM node:22
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:backend", "--", "--host", "0.0.0.0", "--port", "3000"]
