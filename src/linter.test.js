import chai from 'chai';

const { expect } = chai;

// I decided to use mJS and not cJS so I won't be able to set these as constants
const FILE_NAME_REGEX = '^[a-z0-9_.]+$'; // lowercase, numbers, underscores, and dots only
/* eslint-disable-next-line */
const FOLDER_NAME_REGEX = '^((?!_)[A-Za-z0-9\-])+$'; // alphanumeric, numbers, and dashes only

describe('test file & folder name linter', () => {

    const invalidFileNames = ['Example_file', 'Hello_w0rld', 'hello-w0rld', '123.test-me', '123.Test.me', 'Hello', 'H311o', 'Hello_World', 'HelloWorld', 'H311o_W0RlD', 'H311o.W0RlD', 'HELLO.WORLD.TEST', 'HELLO.WORLD.test'];
    const validFileNames = ['hello_world', 'h3ll0_w0rld', 'file_subject.test', 'really_long_name_for_a_test.test', 're4lly_l0ng_n4me_f0r_4_t35t_test'];

    const invalidFolderNames = ['H3llo_W0rld'];
    const validFolderNames = ['AWS', 'test', 'H3110-Wor1d'];

    describe('invalid file names', () => {
        it('it should return false for incorrect filenames', () => {
            invalidFileNames.forEach((element) => {
                expect(new RegExp(FILE_NAME_REGEX).test(element)).to.equal(false);
            });
        });
    });

    describe('valid file names', () => {
        it('it should return true for correct filenames', () => {
            validFileNames.forEach((element) => {
                expect(new RegExp(FILE_NAME_REGEX).test(element)).to.equal(true);
            });
        });
    });

    describe('invalid folder names', () => {
        it('it should return false for incorrect folder names', () => {
            invalidFolderNames.forEach((element) => {
                expect(new RegExp(FOLDER_NAME_REGEX).test(element)).to.equal(false);
            });
        });
    });

    describe('valid folder names', () => {
        it('it should return true for correct folder names', () => {
            validFolderNames.forEach((element) => {
                expect(new RegExp(FOLDER_NAME_REGEX).test(element)).to.equal(true);
            });
        });
    });
});