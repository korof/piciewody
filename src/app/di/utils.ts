import { interfaces } from 'inversify';
import { helpers } from 'inversify-vanillajs-helpers';

import { container } from './inversify.config';

// tslint:disable-next-line no-any
type constructor = new (...args: any[]) => {};

export const getService = <T>(service: interfaces.ServiceIdentifier<T>): T =>
    container.get(service);

export const bindName = (
    name: string,
    service: constructor,
): interfaces.BindingInWhenOnSyntax<{}> => container.bind(name).to(service);

// @ts-ignore - issue with types from inversify and inversify-vanillajs-helpers not matching
export const register = helpers.register(container);
// @ts-ignore
export const registerConstantValue = helpers.registerConstantValue(container);
// @ts-ignore
export const registerFactory = helpers.registerFactory(container);
