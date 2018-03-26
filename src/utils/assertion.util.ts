import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'

import {
    browser,
    protractor,
    ElementFinder
} from "protractor";

chai.use(chaiAsPromised);
const expect = chai.expect;
const EC = protractor.ExpectedConditions;

export class AssertionUtil {

    static async equal(actual: any, expected: any) {
        await expect(actual).to.eventually.equal(expected);
    };

    static async notEqual(actual: any, expected: any) {
        await expect(actual).to.not.equal(expected);
    };

    static async contains(actual: any, expected: any) {
        await expect(actual).to.contains(expected);
    };

    static async notContains(actual: any, expected: any) {
        await expect(actual).to.not.contains(expected);
    };

    static async presenceOf(element: ElementFinder, number = 5000) {
        await browser.wait(EC.presenceOf(element), number);
    };

}