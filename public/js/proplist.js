/**
 * Created by Ganesh on 6/21/2016.
 */

var app1=angular.module('app1',[]);


app1.controller('cntrl1',function($scope,$location,$http){

    var propertyDetails={

        property1:[ {
            address: '3BHK Apartment-80 Lacs in kormangala',
            status: 'Ready to move(Resale),Freehold',
            details: '1500 sq.ft'
        },
            {
                address: '4BHK Apartment-80 Lacs in kormangala',
                status: 'ok to move(Resale),Freehold',
                details: '1600 sq.ft'
            },
            {
                address: '5BHK Apartment-80 Lacs in kormangala',
                status: 'fine to move(Resale),Freehold',
                details: '1700 sq.ft'
            },
            {
                address: '6BHK Apartment-80 Lacs in kormangala',
                status: 'nice to move(Resale),Freehold',
                details: '1800 sq.ft'
            },
            {
                address: '7BHK Apartment-80 Lacs in kormangala',
                status: 'very good to move(Resale),Freehold',
                details: '1900 sq.ft'
            }
        ]
    }
    $scope.proplist=propertyDetails;



});
