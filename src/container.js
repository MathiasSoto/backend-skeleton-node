// repository
import * as usersRepository from "./domain/repository/userRepositoryDatabase";
import * as accountssRepository from "./domain/repository/accountRepositoryDatabase";

// service
import * as jwtService from "./infraestructure/service/jwtService";
import * as securityService from "./infraestructure/service/securityService";
import * as loggerService from "./infraestructure/service/loggerService";
import * as emailService from "./infraestructure/service/emailService";

const repository = {
    users: usersRepository,
    accounts: accountssRepository
};

const service = {
    jwt: jwtService,
    security: securityService,
    logger: loggerService,
    email: emailService
};

export {
    repository,
    service
}