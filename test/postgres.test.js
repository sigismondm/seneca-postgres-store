/* Copyright (c) 2010-2012 Richard Rodger */

var seneca = require('seneca');
var common = require('seneca/lib/common')

var eyes   = common.eyes
var assert = common.assert

//These tests assume a database structure is already created.
/*
  CREATE DATABASE senecatest;
  USE senecatest;
  CREATE ROLE senecatest

  CREATE TABLE foo ( id character varying, p1 character varying, p2 character varying );
  CREATE TABLE moon_bar ( str character varying, id character varying, "int" integer,  bol boolean, wen timestamp with time zone, mark character varying, "dec" real, arr text, obj text );

  GRANT ALL ON foo TO senecatest;
  GRANT ALL ON moon_bar TO senecatest;
*/

var config = {
  log:'print'
};

var si     = seneca(config)
var store  = require('../lib/postgres-store')
store.name = "postgres-store"

var storeopts = {
  name:'senecatest',
  host:'127.0.0.1',
  port:5432,
  username:'senecatest',
  password:'senecatest'
}

si.use(store, storeopts)

si.__testcount = 0
var testcount = 0

module.exports = {
//  basictest: (testcount++, shared.basictest(si)),
//  extratest: (testcount++, extratest(si)),
//  closetest: shared.closetest(si,testcount)
}



function extratest(si) {
  return function() {
    si.ready(function(){
      assert.isNotNull(si)

      // driver specific tests

      si.__testcount++
    })
  }
}