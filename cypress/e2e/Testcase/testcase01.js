var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert


describe('Mocha validation',()=>{

    let name='rahul'
    it.skip ('validation through should',()=>{

        name.should.equal('rahul')
        name.should.have.lengthOf(5)
    })

    it ('validation through expect',()=>{

        name.should.equal('rahul')
    })

    it ('validation through assert ',()=>{

        name.should.equal('rahul')
    })
})