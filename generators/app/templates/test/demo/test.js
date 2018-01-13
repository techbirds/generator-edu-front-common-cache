/**
 * Unit Test for <%= component_name %>
 *
 * @author <%= project_author %> <<%= project_author %>@corp.netease.com>
 */
NEJ.define([
    'base/util',
    'pro/<%= component_name %>/cache',
    '../util.js',
    './cases.js'
],function (
    u, d, ut, cases
){
    // use expect style BDD
    var expect = chai.expect;
    // define component test
    describe('Unit Test - <%= component_name %>',function () {
        // new instance
        describe('new <%= component_name %>',function () {
            it('should be ok to instance <%= component_name %>',function () {
                var inst = d.<%= component_name %>._$allocate();
                expect(inst).to.be.an.instanceof(d.<%= component_name %>);
            });
        });
        // test for all api
        ut.runTest(d,'<%= component_name %>',cases);
    });
});
