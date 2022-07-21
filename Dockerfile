FROM 530363317344.dkr.ecr.us-east-1.amazonaws.com/test-strapi-base-repo
RUN mkdir /src/strapi/
WORKDIR /src/strapi/
COPY . .
RUN npm install
EXPOSE 1337
CMD ["npx","strapi","start"]
