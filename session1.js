// Session exercises no.1

// This is a test file

// Set Up

const express = require('express')
const app = express()
var assert = require("assert")

var cookieHeaders = [
    "sessionId=38223195",
    "sessionId=38225",
    "sessionId=382235",
    "sessionId=383195",
    "sessionId=382295",
]

var goodCookieAnswers = [
    {"sessionId" : "38223195"},
    {"sessionId" : "38225"},
    {"sessionId" : "382235"},
    {"sessionId" : "383195"},
    {"sessionId" : "382295"},
]

// Action

function parseCookies(str) {
   let asArray =  str.split('; ').map(x => x.split('='));
   let ret = {};
   asArray.forEach(lst => ret[lst[0]] = lst[1])
   return ret;
}

// Assertion

console.log(cookieHeaders.length)
for (i = 0 ; i < cookieHeaders.length ; i ++){
    var parsedCookie = parseCookies(cookieHeaders[i])
    //console.log(parsedCookie , goodCookieAnswers[i] )
    assert(
        parsedCookie.sessionId === goodCookieAnswers[i].sessionId,
        "parseCookies func is breaking"
    )
}
