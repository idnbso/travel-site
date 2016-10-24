import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var features = new RevealOnScroll($('.feature-item'), '85%');
var testimonials = new RevealOnScroll($('.testimonial'), '60%');