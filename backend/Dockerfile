#FROM node:18

#WORKDIR /app

#COPY package*.json ./
#RUN npm install

#COPY . .

#EXPOSE 3000

#CMD ["node", "src/server.ts"]


# ---------- FRONTEND BUILD ----------
FROM node:20 AS frontend-build

WORKDIR /app/frontend

COPY frontend/package*.json ./
RUN npm install

COPY frontend ./

RUN npm run build


# ---------- BACKEND ----------
FROM node:20

WORKDIR /app/backend

COPY backend/package*.json ./
RUN npm install

COPY backend ./

# Copy built frontend into backend
COPY --from=frontend-build /app/frontend/dist /app/frontend/dist

EXPOSE 3000

CMD ["node", "src/server.js"]