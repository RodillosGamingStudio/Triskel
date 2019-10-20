function interaccion3(mano1, mano2, celdas, b, c) {
    //ESQUINA SUPERIOR IZQUIERDA
    if (b == 0 && c == 0) {
        if (celdas[1][0].owner != celdas[0][0].owner) {
            if (celdas[0][0].este == "terrenal" && celdas[1][0].oeste == "sagrado") {
                if (celdas[0][0].owner == 0) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[0][0].owner == 1) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 1, 0);
            }
            if (celdas[0][0].este == "sagrado" && celdas[1][0].oeste == "oscuro") {
                if (celdas[1][0].owner == 0) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[1][0].owner == 1) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 0);
            }
            if (celdas[0][0].este == "oscuro" && celdas[1][0].oeste == "terrenal") {
                if (celdas[1][0].owner == 0) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[1][0].owner == 1) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 0);
            }
            if (celdas[0][0].este == "neutro" && (celdas[1][0].oeste == "terrenal" || celdas[1][0].oeste == "oscuro" || celdas[1][0].oeste == "sagrado")) {
                if (celdas[1][0].owner == 0) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[1][0].owner == 1) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 0);
            }
        }
        if (celdas[0][1].owner != celdas[0][0].owner) {
            if (celdas[0][0].sur == "terrenal" && celdas[0][1].norte == "sagrado") {
                if (celdas[0][1].owner == 0) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[0][1].owner == 1) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 0);
            }
            if (celdas[0][0].sur == "sagrado" && celdas[0][1].norte == "oscuro") {
                if (celdas[0][1].owner == 0) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[0][1].owner == 1) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 0);
            }
            if (celdas[0][0].sur == "oscuro" && celdas[0][1].norte == "terrenal") {
                if (celdas[0][1].owner == 0) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[0][1].owner == 1) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 0);
            }
            if (celdas[0][0].sur == "neutro" && (celdas[1][0].norte == "terrenal" || celdas[1][0].norte == "oscuro" || celdas[1][0].norte == "sagrado")) {
                if (celdas[0][1].owner == 0) {
                    celdas[0][0].owner = 0;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].clearTint();
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].clearTint();
                    }
                } else if (celdas[0][1].owner == 1) {
                    celdas[0][0].owner = 1;
                    if (celdas[0][0].which == 1) {
                        mano1[celdas[0][0].indice].setTint(0xfc8987);
                    } else if (celdas[0][0].which == 2) {
                        mano2[celdas[0][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 0); 
            }
        }

    }

    //ESQUINA SUPERIOR DERECHA
    else if (b == 3 && c == 0) {
        if (celdas[2][0].owner != celdas[3][0].owner) {
            if (celdas[3][0].oeste == "terrenal" && celdas[2][0].este == "sagrado") {
                if (celdas[2][0].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[2][0].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);
            }
            if (celdas[3][0].oeste == "sagrado" && celdas[2][0].este == "oscuro") {
                if (celdas[2][0].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[2][0].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);
            }
            if (celdas[3][0].oeste == "oscuro" && celdas[2][0].este == "terrenal") {
                if (celdas[2][0].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[2][0].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);
            }
            if (celdas[3][0].oeste == "neutro" && (celdas[2][0].este == "terrenal" || celdas[2][0].este == "oscuro" || celdas[2][0].este == "sagrado")) {
                if (celdas[2][0].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[2][0].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);
            }
        }
        if (celdas[3][1].owner != celdas[3][0].owner) {
            if (celdas[3][0].sur == "terrenal" && celdas[3][1].norte == "oscuro") {
                if (celdas[3][1].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[3][1].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);
            }
            if (celdas[3][0].sur == "sagrado" && celdas[3][1].norte == "oscuro") {
                if (celdas[3][1].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[3][1].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);

            }
            if (celdas[3][0].sur == "oscuro" && celdas[3][1].norte == "terrenal") {
                if (celdas[3][1].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[3][1].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);
            }
            if (celdas[3][0].sur == "neutro" && (celdas[3][1].norte == "terrenal" || celdas[3][1].norte == "oscuro" || celdas[3][1].norte == "sagrado")) {
                if (celdas[3][1].owner == 0) {
                    celdas[3][0].owner = 0;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].clearTint();
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].clearTint();
                    }
                } else if (celdas[3][1].owner == 1) {
                    celdas[3][0].owner = 1;
                    if (celdas[3][0].which == 1) {
                        mano1[celdas[3][0].indice].setTint(0xfc8987);
                    } else if (celdas[3][0].which == 2) {
                        mano2[celdas[3][0].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 0);
            }
        }
    }

    //ESQUINA INFERIOR IZQUIERDA

    else if (b == 0 && c == 3) {
        if (celdas[1][3].owner != celdas[0][3].owner) {
            if (celdas[0][3].este == "terrenal" && celdas[1][3].oeste == "sagrado") {
                if (celdas[1][3].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[1][3].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
            if (celdas[0][3].este == "sagrado" && celdas[1][3].oeste == "oscuro") {
                if (celdas[1][3].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[1][3].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
            if (celdas[0][3].este == "oscuro" && celdas[1][3].oeste == "terrenal") {
                if (celdas[1][3].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[1][3].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
            if (celdas[0][3].este == "neutro" && (celdas[1][3].oeste == "terrenal" || celdas[1][3].oeste == "oscuro" || celdas[1][3].oeste == "sagrado")) {
                if (celdas[1][3].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[1][3].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
        }
        if (celdas[0][2].owner != celdas[0][3].owner) {
            if (celdas[0][3].norte == "terrenal" && celdas[0][2].sur == "sagrado") {
                if (celdas[0][2].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[0][2].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
            if (celdas[0][3].norte == "sagrado" && celdas[0][2].sur == "oscuro") {
                if (celdas[0][2].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[0][2].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
            if (celdas[0][3].norte == "oscuro" && celdas[0][2].sur == "terrenal") {
                if (celdas[0][2].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[0][2].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
            if (celdas[0][3].norte == "neutro" && (celdas[0][2].sur == "terrenal" || celdas[0][2].sur == "oscuro" || celdas[0][2].sur == "sagrado")) {
                if (celdas[0][2].owner == 0) {
                    celdas[0][3].owner = 0;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].clearTint();
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].clearTint();
                    }
                } else if (celdas[0][2].owner == 1) {
                    celdas[0][3].owner = 1;
                    if (celdas[0][3].which == 1) {
                        mano1[celdas[0][3].indice].setTint(0xfc8987);
                    } else if (celdas[0][3].which == 2) {
                        mano2[celdas[0][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 0, 3);
            }
        }

    }

    //ESQUINA INFERIOR DERECHA
    else if (b == 3 && c == 3) {
        if (celdas[2][3].owner != celdas[3][3].owner) {
            if (celdas[3][3].oeste == "terrenal" && celdas[2][3].este == "sagrado") {
                if (celdas[2][3].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[2][3].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
            if (celdas[3][3].oeste == "sagrado" && celdas[2][3].este == "oscuro") {
                if (celdas[2][3].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[2][3].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
            if (celdas[3][3].oeste == "oscuro" && celdas[2][3].este == "terrenal") {
                if (celdas[2][3].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[2][3].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
            if (celdas[2][3].oeste == "neutro" && (celdas[0][2].este == "terrenal" || celdas[0][2].este == "oscuro" || celdas[0][2].este == "sagrado")) {
                if (celdas[2][3].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[2][3].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
        }
        if (celdas[3][2].owner != celdas[3][3].owner) {
            if (celdas[3][3].norte == "terrenal" && celdas[3][2].sur == "sagrado") {
                if (celdas[3][2].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[3][2].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
            if (celdas[3][3].norte == "sagrado" && celdas[3][2].sur == "oscuro") {
                if (celdas[3][2].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[3][2].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
            if (celdas[3][3].norte == "oscuro" && celdas[3][2].sur == "terrenal") {
                if (celdas[3][2].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[3][2].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
            if (celdas[3][3].norte == "neutro" && (celdas[3][2].sur == "terrenal" || celdas[3][2].sur == "oscuro" || celdas[3][2].sur == "sagrado")) {
                if (celdas[3][2].owner == 0) {
                    celdas[3][3].owner = 0;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].clearTint();
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].clearTint();
                    }
                } else if (celdas[3][2].owner == 1) {
                    celdas[3][3].owner = 1;
                    if (celdas[3][3].which == 1) {
                        mano1[celdas[3][3].indice].setTint(0xfc8987);
                    } else if (celdas[3][3].which == 2) {
                        mano2[celdas[3][3].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, 3, 3);
            }
        }
    }


    //LADO SUPERIOR
    else if ((b == 1 || b == 2) && c == 0) {
        if (celdas[b - 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && celdas[b - 1][c].este == "sagrado") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "sagrado" && celdas[b - 1][c].este == "oscuro") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "oscuro" && celdas[b - 1][c].este == "terrenal") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "neutro" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "sagrado")) {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }

        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && celdas[b + 1][c].oeste == "sagrado") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "sagrado" && celdas[b + 1][c].oeste == "oscuro") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "oscuro" && celdas[b + 1][c].oeste == "terrenal") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "neutro" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "sagrado")) {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && celdas[b][c + 1].norte == "sagrado") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "sagrado" && celdas[b][c + 1].norte == "oscuro") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "oscuro" && celdas[b][c + 1].norte == "terrenal") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "neutro" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "sagrado")) {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
    }




    //LADO INFERIOR
    else if (c == 3 && (b == 1 || b == 2)) {
        //Interaccion1 con la izquierda
        if (celdas[b - 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && celdas[b - 1][c].este == "sagrado") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "sagrado" && celdas[b - 1][c].este == "oscuro") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "oscuro" && celdas[b - 1][c].este == "terrenal") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "neutro" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "sagrado")) {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        //Interaccion1 con la derecha
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && celdas[b + 1][c].oeste == "sagrado") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "sagrado" && celdas[b + 1][c].oeste == "oscuro") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "oscuro" && celdas[b + 1][c].oeste == "terrenal") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "neutro" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "sagrado")) {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c - 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].norte == "terrenal" && celdas[b][c - 1].sur == "sagrado") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "sagrado" && celdas[b][c - 1].sur == "oscuro") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "oscuro" && celdas[b][c - 1].sur == "terrenal") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "neutro" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "sagrado")) {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
    }

    //LADO IZQUIERDO
    else if (b == 0 && (c == 1 || c == 2)) {
        if (celdas[b][c - 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    if (celdas[b][c - 1].which == 1) {
            
                        mano1[celdas[b][c - 1].indice].clearTint();
            
                    } else if (celdas[b][c - 1].which == 2) {
            
                        mano2[celdas[b][c - 1].indice].clearTint();
            
                    }
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    if (celdas[b][c - 1].which == 1) {
            
                        mano1[celdas[b][c - 1].indice].setTint(0xfc8987);
            
                    } else if (celdas[b][c - 1].which == 2) {
            
                        mano2[celdas[b][c - 1].indice].setTint(0xfc8987);
            
                    }
                }
                interaccion(mano1, mano2, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    if (celdas[b][c - 1].which == 1) {
            
                        mano1[celdas[b][c - 1].indice].clearTint();
            
                    } else if (celdas[b][c - 1].which == 2) {
            
                        mano2[celdas[b][c - 1].indice].clearTint();
            
                    }
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    if (celdas[b][c - 1].which == 1) {
            
                        mano1[celdas[b][c - 1].indice].setTint(0xfc8987);
            
                    } else if (celdas[b][c - 1].which == 2) {
            
                        mano2[celdas[b][c - 1].indice].setTint(0xfc8987);
            
                    }
                }
                interaccion(mano1, mano2, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    if (celdas[b][c - 1].which == 1) {
            
                        mano1[celdas[b][c - 1].indice].clearTint();
            
                    } else if (celdas[b][c - 1].which == 2) {
            
                        mano2[celdas[b][c - 1].indice].clearTint();
            
                    }
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    if (celdas[b][c - 1].which == 1) {
            
                        mano1[celdas[b][c - 1].indice].setTint(0xfc8987);
            
                    } else if (celdas[b][c - 1].which == 2) {
            
                        mano2[celdas[b][c - 1].indice].setTint(0xfc8987);
            
                    }
                }
                interaccion(mano1, mano2, celdas, b, c - 1);
            }
        }
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && celdas[b][c + 1].norte == "sagrado") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "sagrado" && celdas[b][c + 1].norte == "oscuro") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "oscuro" && celdas[b][c + 1].norte == "terrenal") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "neutro" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "sagrado")) {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && celdas[b + 1][c].oeste == "sagrado") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "sagrado" && celdas[b + 1][c].oeste == "oscuro") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "oscuro" && celdas[b + 1][c].oeste == "terrenal") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "neutro" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "sagrado")) {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
    }

    //LADO DERECHO
    else if (b == 3 && (c == 1 || c == 2)) {
        //Interaccion1 con la izquierda
        if (celdas[b - 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && celdas[b - 1][c].este == "sagrado") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "sagrado" && celdas[b - 1][c].este == "oscuro") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "oscuro" && celdas[b - 1][c].este == "terrenal") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "neutro" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "sagrado")) {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c - 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].norte == "terrenal" && celdas[b][c - 1].sur == "sagrado") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "sagrado" && celdas[b][c - 1].sur == "oscuro") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "oscuro" && celdas[b][c - 1].sur == "terrenal") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "neutro" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "sagrado")) {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        //Interaccion1 con sur
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && celdas[b][c + 1].norte == "sagrado") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "sagrado" && celdas[b][c + 1].norte == "oscuro") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "oscuro" && celdas[b][c + 1].norte == "terrenal") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "neutro" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "sagrado")) {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
    }

    //RESTO
    else {
        //Interaccion1 con la izquierda
        if (celdas[b - 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && celdas[b - 1][c].este == "sagrado") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "sagrado" && celdas[b - 1][c].este == "oscuro") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "oscuro" && celdas[b - 1][c].este == "terrenal") {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].oeste == "neutro" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "sagrado")) {
                if (celdas[b - 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b - 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c - 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].norte == "terrenal" && celdas[b][c - 1].sur == "sagrado") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "sagrado" && celdas[b][c - 1].sur == "oscuro") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "oscuro" && celdas[b][c - 1].sur == "terrenal") {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].norte == "neutro" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "sagrado")) {
                if (celdas[b][c - 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c - 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        //Interaccion1 con sur
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && celdas[b][c + 1].norte == "sagrado") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "sagrado" && celdas[b][c + 1].norte == "oscuro") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "oscuro" && celdas[b][c + 1].norte == "terrenal") {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].sur == "neutro" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "sagrado")) {
                if (celdas[b][c + 1].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b][c + 1].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
        //Interaccion1 con la derecha
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && celdas[b + 1][c].oeste == "sagrado") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "sagrado" && celdas[b + 1][c].oeste == "oscuro") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "oscuro" && celdas[b + 1][c].oeste == "terrenal") {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
            if (celdas[b][c].este == "neutro" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "sagrado")) {
                if (celdas[b + 1][c].owner == 0) {
                    celdas[b][c].owner = 0;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].clearTint();
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].clearTint();
                    }
                } else if (celdas[b + 1][c].owner == 1) {
                    celdas[b][c].owner = 1;
                    if (celdas[b][c].which == 1) {
                        mano1[celdas[b][c].indice].setTint(0xfc8987);
                    } else if (celdas[b][c].which == 2) {
                        mano2[celdas[b][c].indice].setTint(0xfc8987);
                    }
                }
                interaccion(mano1, mano2, celdas, b, c);
            }
        }
    }


}