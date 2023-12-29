FROM registry.access.redhat.com/ubi8/ubi-minimal:latest AS builder

WORKDIR /react-app

RUN microdnf module reset nodejs && \
    microdnf -y module enable nodejs:18 && \
    microdnf -y install nodejs npm && \
    microdnf -y clean all

RUN npm install -g corepack

RUN corepack enable

COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./

RUN yarn 

COPY . .

RUN yarn build


FROM registry.access.redhat.com/ubi8/ubi-minimal:latest

RUN microdnf module reset nodejs && \
    microdnf -y module enable nginx && \
    microdnf -y install nginx && \
    microdnf -y clean all

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /react-app/dist /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]