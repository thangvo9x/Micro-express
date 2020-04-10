module.exports.run = (self, addEvents) => {
  self.fs.copy(
    self.templatePath('wait-for-it.sh'),
    self.destinationPath('wait-for-it.sh'),
  );
  self.fs.copy(
    self.templatePath('prisma.yml'),
    self.destinationPath('prisma.yml'),
  );
  self.fs.copy(
    self.templatePath('Dockerfile'),
    self.destinationPath('Dockerfile'),
  );
  self.fs.copy(
    self.templatePath('docker-compose.yaml'),
    self.destinationPath('docker-compose.yaml'),
  );
  self.fs.copy(
    self.templatePath('.gitignore'),
    self.destinationPath('.gitignore'),
  );
  self.fs.copy(
    self.templatePath('.eslintrc.json'),
    self.destinationPath('.eslintrc.json'),
  );
  self.fs.copy(
    self.templatePath('.eslintignore'),
    self.destinationPath('.eslintignore'),
  );
  if (addEvents) {
    self.fs.copy(
      self.templatePath('.env.default.with-kafka'),
      self.destinationPath('.env.default'),
    );
  } else {
    self.fs.copy(
      self.templatePath('.env.default'),
      self.destinationPath('.env.default'),
    );
  }
  self.fs.copy(
    self.templatePath('.dockerignore'),
    self.destinationPath('.dockerignore'),
  );
  self.fs.copy(
    self.templatePath('src/server.js'),
    self.destinationPath('src/server.js'),
  );
  self.fs.copy(
    self.templatePath('src/repository.js'),
    self.destinationPath('src/repository.js'),
  );
  if (addEvents) {
    self.fs.copy(
      self.templatePath('src/index-with-consumer.js'),
      self.destinationPath('src/index.js'),
    );
    self.fs.copy(
      self.templatePath('src/events/kafkaConfig.js'),
      self.destinationPath('src/events/kafkaConfig.js'),
    );
    self.fs.copy(
      self.templatePath('src/events/producer.js'),
      self.destinationPath('src/events/producer.js'),
    );
  } else {
    self.fs.copy(
      self.templatePath('src/index.js'),
      self.destinationPath('src/index.js'),
    );
  }
};