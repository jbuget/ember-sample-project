import { expect } from 'chai';
import { beforeEach, afterEach, describe, it } from 'mocha';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';

let application;

describe('basic acceptance test', function() {

  beforeEach(function() {
    application= startApp();
    visit("/");
  });

  afterEach(function() {
    destroyApp(application);
  });

  it('can visit /', async function() {
    await visit('/');
    expect(currentURL()).to.equal('/');
  });

});
