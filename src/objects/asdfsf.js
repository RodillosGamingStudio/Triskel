

function interaccion(mano, celdas, b, c) {

    if (b == 0 && c == 0) {
        if (celdas[1][0].owner != celdas[0][0].owner) {
            if (celdas[0][0].este == "terrenal" && (celdas[1][0].oeste == "oscuro" || celdas[1][0].oeste == "neutro")) {
                if (celdas[0][0].owner == 0) {
                    celdas[1][0].owner = 0;
                    mano[celdas[1][0].indice].setInteractive();
                    mano[celdas[1][0].indice].clearTint();
                    mano[celdas[1][0].indice].removeInteractive();
                } else if (celdas[0][0].owner == 1) {
                    celdas[1][0].owner = 1;
                    mano[celdas[1][0].indice].setInteractive();
                    mano[celdas[1][0].indice].setTint(0xfc8987);
                    mano[celdas[1][0].indice].removeInteractive();
                }
                interaccion(mano, celdas, 1, 0);
            }
            if (celdas[0][0].este == "sagrado" && (celdas[1][0].oeste == "terrenal" || celdas[1][0].oeste == "neutro")) {
                if (celdas[0][0].owner == 0) {
                    celdas[1][0].owner = 0;
                    mano[celdas[1][0].indice].setInteractive();
                    mano[celdas[1][0].indice].clearTint();
                    mano[celdas[1][0].indice].removeInteractive();
                } else if (celdas[0][0].owner == 1) {
                    celdas[1][0].owner = 1;
                    mano[celdas[1][0].indice].setInteractive();
                    mano[celdas[1][0].indice].setTint(0xfc8987);
                    mano[celdas[1][0].indice].removeInteractive();
                }
                interaccion(mano, celdas, 1, 0);
            }
            if (celdas[0][0].este == "oscuro" && (celdas[1][0].oeste == "sagrado" || celdas[1][0].oeste == "neutro")) {
                if (celdas[0][0].owner == 0) {
                    celdas[1][0].owner = 0;
                    mano[celdas[1][0].indice].setInteractive();
                    mano[celdas[1][0].indice].clearTint();
                    mano[celdas[1][0].indice].removeInteractive();
                } else if (celdas[0][0].owner == 1) {
                    celdas[1][0].owner = 1;
                    mano[celdas[1][0].indice].setInteractive();
                    mano[celdas[1][0].indice].setTint(0xfc8987);
                    mano[celdas[1][0].indice].removeInteractive();
                }
                interaccion(mano, celdas, 1, 0);
            }
        }
        if (celdas[0][1].owner != celdas[0][0].owner) {
            if (celdas[0][0].sur == "terrenal" && (celdas[0][1].norte == "oscuro" || celdas[0][1].norte == "neutro")) {
                if (celdas[0][0].owner == 0) {
                    celdas[0][1].owner = 0;
                    mano[celdas[0][1].indice].setInteractive();
                    mano[celdas[0][1].indice].clearTint();
                    mano[celdas[0][1].indice].removeInteractive();
                } else if (celdas[0][0].owner == 1) {
                    celdas[0][1].owner = 1;
                    mano[celdas[0][1].indice].setInteractive();
                    mano[celdas[0][1].indice].setTint(0xfc8987);
                    mano[celdas[0][1].indice].removeInteractive();
                }
                interaccion(mano, celdas, 0, 1);
            }
            if (celdas[0][0].sur == "sagrado" && (celdas[0][1].norte == "terrenal" || celdas[0][1].norte == "neutro")) {
                if (celdas[0][0].owner == 0) {
                    celdas[0][1].owner = 0;
                    mano[celdas[0][1].indice].setInteractive();
                    mano[celdas[0][1].indice].clearTint();
                    mano[celdas[0][1].indice].removeInteractive();
                } else if (celdas[0][0].owner == 1) {
                    celdas[0][1].owner = 1;
                    mano[celdas[0][1].indice].setInteractive();
                    mano[celdas[0][1].indice].setTint(0xfc8987);
                    mano[celdas[0][1].indice].removeInteractive();
                }
                interaccion(mano, celdas, 0, 1);
            }
            if (celdas[0][0].sur == "oscuro" && (celdas[0][1].norte == "sagrado" || celdas[0][1].norte == "neutro")) {
                if (celdas[0][0].owner == 0) {
                    celdas[0][1].owner = 0;
                    mano[celdas[0][1].indice].setInteractive();
                    mano[celdas[0][1].indice].clearTint();
                    mano[celdas[0][1].indice].removeInteractive();
                } else if (celdas[0][0].owner == 1) {
                    celdas[0][1].owner = 1;
                    mano[celdas[0][1].indice].setInteractive();
                    mano[celdas[0][1].indice].setTint(0xfc8987);
                    mano[celdas[0][1].indice].removeInteractive();
                }
                interaccion(mano, celdas, 0, 1);
            }
        }

    }

    //ESQUINA SUPERIOR DERECHA
    else if (b == 3 && c == 0) {
        if (celdas[2][0].owner != celdas[3][0].owner) {
            if (celdas[3][0].oeste == "terrenal" && (celdas[2][0].este == "oscuro" || celdas[2][0].este == "neutro")) {
                if (celdas[3][0].owner == 0) {
                    celdas[2][0].owner = 0;
                    mano[celdas[2][0].indice].setInteractive();
                    mano[celdas[2][0].indice].clearTint();
                    mano[celdas[2][0].indice].removeInteractive();
                } else if (celdas[3][0].owner == 1) {
                    celdas[2][0].owner = 1;
                    mano[celdas[2][0].indice].setInteractive();
                    mano[celdas[2][0].indice].setTint(0xfc8987);
                    mano[celdas[2][0].indice].removeInteractive();
                }
                interaccion(mano, celdas, 2, 0);
            }
            if (celdas[3][0].oeste == "sagrado" && (celdas[2][0].este == "terrenal" || celdas[2][0].este == "neutro")) {
                if (celdas[3][0].owner == 0) {
                    celdas[2][0].owner = 0;
                    mano[celdas[2][0].indice].setInteractive();
                    mano[celdas[2][0].indice].clearTint();
                    mano[celdas[2][0].indice].removeInteractive();
                } else if (celdas[3][0].owner == 1) {
                    celdas[2][0].owner = 1;
                    mano[celdas[2][0].indice].setInteractive();
                    mano[celdas[2][0].indice].setTint(0xfc8987);
                    mano[celdas[2][0].indice].removeInteractive();
                }
                interaccion(mano, celdas, 2, 0);
            }
            if (celdas[3][0].oeste == "oscuro" && (celdas[2][0].este == "sagrado" || celdas[2][0].este == "neutro")) {
                if (celdas[3][0].owner == 0) {
                    celdas[2][0].owner = 0;
                    mano[celdas[2][0].indice].setInteractive();
                    mano[celdas[2][0].indice].clearTint();
                    mano[celdas[2][0].indice].removeInteractive();
                } else if (celdas[3][0].owner == 1) {
                    celdas[2][0].owner = 1;
                    mano[celdas[2][0].indice].setInteractive();
                    mano[celdas[2][0].indice].setTint(0xfc8987);
                    mano[celdas[2][0].indice].removeInteractive();
                }
                interaccion(mano, celdas, 2, 0);
            }
        }
        if (celdas[3][1].owner != celdas[3][0].owner) {
            if (celdas[3][0].sur == "terrenal" && (celdas[3][1].norte == "oscuro" || celdas[3][1].norte == "neutro")) {
                if (celdas[3][0].owner == 0) {
                    celdas[3][1].owner = 0;
                    mano[celdas[3][1].indice].setInteractive();
                    mano[celdas[3][1].indice].clearTint();
                    mano[celdas[3][1].indice].removeInteractive();
                } else if (celdas[3][0].owner == 1) {
                    celdas[3][1].owner = 1;
                    mano[celdas[3][1].indice].setInteractive();
                    mano[celdas[3][1].indice].setTint(0xfc8987);
                    mano[celdas[3][1].indice].removeInteractive();
                }
                interaccion(mano, celdas, 3, 1);
            }
            if (celdas[3][0].sur == "sagrado" && (celdas[3][1].norte == "terrenal" || celdas[3][1].norte == "neutro")) {
                if (celdas[3][0].owner == 0) {
                    celdas[3][1].owner = 0;
                    mano[celdas[3][1].indice].setInteractive();
                    mano[celdas[3][1].indice].clearTint();
                    mano[celdas[3][1].indice].removeInteractive();
                } else if (celdas[3][0].owner == 1) {
                    celdas[3][1].owner = 1;
                    mano[celdas[3][1].indice].setInteractive();
                    mano[celdas[3][1].indice].setTint(0xfc8987);
                    mano[celdas[3][1].indice].removeInteractive();
                }
                interaccion(mano, celdas, 3, 1);

            }
            if (celdas[3][0].sur == "oscuro" && (celdas[3][1].norte == "sagrado" || celdas[3][1].norte == "neutro")) {
                if (celdas[3][0].owner == 0) {
                    celdas[3][1].owner = 0;
                    mano[celdas[3][1].indice].setInteractive();
                    mano[celdas[3][1].indice].clearTint();
                    mano[celdas[3][1].indice].removeInteractive();
                } else if (celdas[3][0].owner == 1) {
                    celdas[3][1].owner = 1;
                    mano[celdas[3][1].indice].setInteractive();
                    mano[celdas[3][1].indice].setTint(0xfc8987);
                    mano[celdas[3][1].indice].removeInteractive();
                }
                interaccion(mano, celdas, 3, 1);
            }
        }
    }

    //ESQUINA INFERIOR IZQUIERDA

    else if (b == 0 && c == 3) {
        if (celdas[1][3].owner != celdas[0][3].owner) {
            if (celdas[0][3].este == "terrenal" && (celdas[1][3].oeste == "oscuro" || celdas[1][3].oeste == "neutro")) {
                if (celdas[0][3].owner == 0) {
                    celdas[1][3].owner = 0;
                    mano[celdas[1][3].indice].setInteractive();
                    mano[celdas[1][3].indice].clearTint();
                    mano[celdas[1][3].indice].removeInteractive();
                } else if (celdas[0][3].owner == 1) {
                    celdas[1][3].owner = 1;
                    mano[celdas[1][3].indice].setInteractive();
                    mano[celdas[1][3].indice].setTint(0xfc8987);
                    mano[celdas[1][3].indice].removeInteractive();
                }
                interaccion(mano, celdas, 1, 3);
            }
            if (celdas[0][3].este == "sagrado" && (celdas[1][3].oeste == "terrenal" || celdas[1][3].oeste == "neutro")) {
                if (celdas[0][3].owner == 0) {
                    celdas[1][3].owner = 0;
                    mano[celdas[1][3].indice].setInteractive();
                    mano[celdas[1][3].indice].clearTint();
                    mano[celdas[1][3].indice].removeInteractive();
                } else if (celdas[0][3].owner == 1) {
                    celdas[1][3].owner = 1;
                    mano[celdas[1][3].indice].setInteractive();
                    mano[celdas[1][3].indice].setTint(0xfc8987);
                    mano[celdas[1][3].indice].removeInteractive();
                }
                interaccion(mano, celdas, 1, 3);
            }
            if (celdas[0][3].este == "oscuro" && (celdas[1][3].oeste == "sagrado" || celdas[1][3].oeste == "neutro")) {
                if (celdas[0][3].owner == 0) {
                    celdas[1][3].owner = 0;
                    mano[celdas[1][3].indice].setInteractive();
                    mano[celdas[1][3].indice].clearTint();
                    mano[celdas[1][3].indice].removeInteractive();
                } else if (celdas[0][3].owner == 1) {
                    celdas[1][3].owner = 1;
                    mano[celdas[1][3].indice].setInteractive();
                    mano[celdas[1][3].indice].setTint(0xfc8987);
                    mano[celdas[1][3].indice].removeInteractive();
                }
                interaccion(mano, celdas, 1, 3);
            }
        }
        if (celdas[0][2].owner != celdas[0][3].owner) {
            if (celdas[0][3].norte == "terrenal" && (celdas[0][2].sur == "oscuro" || celdas[0][2].sur == "neutro")) {
                if (celdas[0][3].owner == 0) {
                    celdas[0][2].owner = 0;
                    mano[celdas[0][2].indice].setInteractive();
                    mano[celdas[0][2].indice].clearTint();
                    mano[celdas[0][2].indice].removeInteractive();
                } else if (celdas[0][3].owner == 1) {
                    celdas[0][2].owner = 1;
                    mano[celdas[0][2].indice].setInteractive();
                    mano[celdas[0][2].indice].setTint(0xfc8987);
                    mano[celdas[0][2].indice].removeInteractive();
                }
                interaccion(mano, celdas, 0, 2);
            }
            if (celdas[0][3].norte == "sagrado" && (celdas[0][2].sur == "terrenal" || celdas[0][2].sur == "neutro")) {
                if (celdas[0][3].owner == 0) {
                    celdas[0][2].owner = 0;
                    mano[celdas[0][2].indice].setInteractive();
                    mano[celdas[0][2].indice].clearTint();
                    mano[celdas[0][2].indice].removeInteractive();
                } else if (celdas[0][3].owner == 1) {
                    celdas[0][2].owner = 1;
                    mano[celdas[0][2].indice].setInteractive();
                    mano[celdas[0][2].indice].setTint(0xfc8987);
                    mano[celdas[0][2].indice].removeInteractive();
                }
                interaccion(mano, celdas, 0, 2);
            }
            if (celdas[0][3].norte == "oscuro" && (celdas[0][2].sur == "sagrado" || celdas[0][2].sur == "neutro")) {
                if (celdas[0][3].owner == 0) {
                    celdas[0][2].owner = 0;
                    mano[celdas[0][2].indice].setInteractive();
                    mano[celdas[0][2].indice].clearTint();
                    mano[celdas[0][2].indice].removeInteractive();
                } else if (celdas[0][3].owner == 1) {
                    celdas[0][2].owner = 1;
                    mano[celdas[0][2].indice].setInteractive();
                    mano[celdas[0][2].indice].setTint(0xfc8987);
                    mano[celdas[0][2].indice].removeInteractive();
                }
                interaccion(mano, celdas, 0, 2);
            }
        }

    }

    //ESQUINA INFERIOR DERECHA
    else if (b == 3 && c == 3) {
        if (celdas[2][3].owner != celdas[3][3].owner) {
            if (celdas[3][3].oeste == "terrenal" && (celdas[2][3].este == "oscuro" || celdas[2][3].este == "neutro")) {
                if (celdas[3][3].owner == 0) {
                    celdas[2][3].owner = 0;
                    mano[celdas[2][3].indice].setInteractive();
                    mano[celdas[2][3].indice].clearTint();
                    mano[celdas[2][3].indice].removeInteractive();
                } else if (celdas[3][3].owner == 1) {
                    celdas[2][3].owner = 1;
                    mano[celdas[2][3].indice].setInteractive();
                    mano[celdas[2][3].indice].setTint(0xfc8987);
                    mano[celdas[2][3].indice].removeInteractive();
                }
                interaccion(mano, celdas, 2, 3);
            }
            if (celdas[3][3].oeste == "sagrado" && (celdas[2][3].este == "terrenal" || celdas[2][3].este == "neutro")) {
                if (celdas[3][3].owner == 0) {
                    celdas[2][3].owner = 0;
                    mano[celdas[2][3].indice].setInteractive();
                    mano[celdas[2][3].indice].clearTint();
                    mano[celdas[2][3].indice].removeInteractive();
                } else if (celdas[3][3].owner == 1) {
                    celdas[2][3].owner = 1;
                    mano[celdas[2][3].indice].setInteractive();
                    mano[celdas[2][3].indice].setTint(0xfc8987);
                    mano[celdas[2][3].indice].removeInteractive();
                    interaccion(mano, celdas, 2, 3);
                }
            }
            if (celdas[3][3].oeste == "oscuro" && (celdas[2][3].este == "sagrado" || celdas[2][3].este == "neutro")) {
                if (celdas[3][3].owner == 0) {
                    celdas[2][3].owner = 0;
                    mano[celdas[2][3].indice].setInteractive();
                    mano[celdas[2][3].indice].clearTint();
                    mano[celdas[2][3].indice].removeInteractive();
                } else if (celdas[3][3].owner == 1) {
                    celdas[2][3].owner = 1;
                    mano[celdas[2][3].indice].setInteractive();
                    mano[celdas[2][3].indice].setTint(0xfc8987);
                    mano[celdas[2][3].indice].removeInteractive();
                    interaccion(mano, celdas, 2, 3);
                }
            }
        }
        if (celdas[3][2].owner != celdas[3][3].owner) {
            if (celdas[3][3].norte == "terrenal" && (celdas[3][2].sur == "oscuro" || celdas[3][2].sur == "neutro")) {
                if (celdas[3][3].owner == 0) {
                    celdas[3][2].owner = 0;
                    mano[celdas[3][2].indice].setInteractive();
                    mano[celdas[3][2].indice].clearTint();
                    mano[celdas[3][2].indice].removeInteractive();
                } else if (celdas[3][3].owner == 1) {
                    celdas[3][2].owner = 1;
                    mano[celdas[3][2].indice].setInteractive();
                    mano[celdas[3][2].indice].setTint(0xfc8987);
                    mano[celdas[3][2].indice].removeInteractive();
                }
                interaccion(mano, celdas, 3, 2);
            }
            if (celdas[3][3].norte == "sagrado" && (celdas[3][2].sur == "terrenal" || celdas[3][2].sur == "neutro")) {
                if (celdas[3][3].owner == 0) {
                    celdas[3][2].owner = 0;
                    mano[celdas[3][2].indice].setInteractive();
                    mano[celdas[3][2].indice].clearTint();
                    mano[celdas[3][2].indice].removeInteractive();
                } else if (celdas[3][3].owner == 1) {
                    celdas[3][2].owner = 1;
                    mano[celdas[3][2].indice].setInteractive();
                    mano[celdas[3][2].indice].setTint(0xfc8987);
                    mano[celdas[3][2].indice].removeInteractive();
                }
                interaccion(mano, celdas, 3, 2);
            }
            if (celdas[3][3].norte == "oscuro" && (celdas[3][2].sur == "sagrado" || celdas[3][2].sur == "neutro")) {
                if (celdas[3][3].owner == 0) {
                    celdas[3][2].owner = 0;
                    mano[celdas[3][2].indice].setInteractive();
                    mano[celdas[3][2].indice].clearTint();
                    mano[celdas[3][2].indice].removeInteractive();
                } else if (celdas[3][3].owner == 1) {
                    celdas[3][2].owner = 1;
                    mano[celdas[3][2].indice].setInteractive();
                    mano[celdas[3][2].indice].setTint(0xfc8987);
                    mano[celdas[3][2].indice].removeInteractive();
                }
                interaccion(mano, celdas, 3, 2);
            }
        }
    }


    //LADO SUPERIOR
    else if ((b == 1 || b == 2) && c == 0) {
        if (celdas[b - 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                    interaccion(mano, celdas, b - 1, c);
                }
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                    interaccion(mano, celdas, b - 1, c);
                }
            }
        }
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b + 1, c);
            }
        }
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].norte == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion(mano, celdas, b, c + 1);
            }
        }
    }




    //LADO INFERIOR
    else if (c == 3 && (b == 1 || b == 2)) {
        //Interaccion1 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b - 1, c);

            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b - 1, c);

            }
        }
        //Interaccion1 con la derecha
        if (celdas[b][c].owner != celdas[b + 1][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b + 1, c);

            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion(mano, celdas, b + 1, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion(mano, celdas, b, c - 1);
            }
        }
    }
    //LADO IZQUIERDO
    else if (b == 0 && (c == 1 || c == 2)) {
        if (celdas[b][c - 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
        }
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].norte == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
        }
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b + 1, c);
            }
        }
    }

    //LADO DERECHO
    else if (b == 3 && (c == 1 || c == 2)) {
        //Interaccion1 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b - 1, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
        }
        //Interaccion1 con sur
        if (celdas[b][c + 1].owner != celdas[b][c + 1].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].oeste == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].oeste == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
        }
    }

    //RESTO
    else {
        //Interaccion1 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b - 1][c].owner = 0;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].clearTint();
                    mano[celdas[b - 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b - 1][c].owner = 1;
                    mano[celdas[b - 1][c].indice].setInteractive();
                    mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b - 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b - 1, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c - 1].owner = 0;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].clearTint();
                    mano[celdas[b][c - 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c - 1].owner = 1;
                    mano[celdas[b][c - 1].indice].setInteractive();
                    mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c - 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c - 1);
            }
        }
        //Interaccion1 con sur
        if (celdas[b][c + 1].owner != celdas[b][c + 1].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].oeste == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].oeste == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b][c + 1].owner = 0;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].clearTint();
                    mano[celdas[b][c + 1].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b][c + 1].owner = 1;
                    mano[celdas[b][c + 1].indice].setInteractive();
                    mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                    mano[celdas[b][c + 1].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b, c + 1);
            }
        }
        //Interaccion1 con la derecha
        if (celdas[b][c].owner != celdas[b + 1][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                if (celdas[b][c].owner == 0) {
                    celdas[b + 1][c].owner = 0;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].clearTint();
                    mano[celdas[b + 1][c].indice].removeInteractive();
                } else if (celdas[b][c].owner == 1) {
                    celdas[b + 1][c].owner = 1;
                    mano[celdas[b + 1][c].indice].setInteractive();
                    mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                    mano[celdas[b + 1][c].indice].removeInteractive();
                }
                interaccion1(mano, celdas, b + 1, c);
            }
        }
    }

}





























function interaccion1(mano, celdas, b, c) {

    if (b == 0 && c == 0) {
        if (celdas[1][0].owner != celdas[0][0].owner) {
            if (celdas[0][0].este == "terrenal" && (celdas[1][0].oeste == "oscuro" || celdas[1][0].oeste == "neutro")) {
                celdas[1][0].owner = 0;
                mano[celdas[1][0].indice].setInteractive();
                mano[celdas[1][0].indice].clearTint();
                mano[celdas[1][0].indice].removeInteractive();
                interaccion1(mano, celdas, 1, 0);
            }
            if (celdas[0][0].este == "sagrado" && (celdas[1][0].oeste == "terrenal" || celdas[1][0].oeste == "neutro")) {
                celdas[1][0].owner = 0;
                mano[celdas[1][0].indice].setInteractive();
                mano[celdas[1][0].indice].clearTint();
                mano[celdas[1][0].indice].removeInteractive();
                interaccion1(mano, celdas, 1, 0);
            }
            if (celdas[0][0].este == "oscuro" && (celdas[1][0].oeste == "sagrado" || celdas[1][0].oeste == "neutro")) {
                celdas[1][0].owner = 0;
                mano[celdas[1][0].indice].setInteractive();
                mano[celdas[1][0].indice].clearTint();
                mano[celdas[1][0].indice].removeInteractive();
                interaccion1(mano, celdas, 1, 0);
            }
        }
        if (celdas[0][1].owner != celdas[0][0].owner) {
            if (celdas[0][0].sur == "terrenal" && (celdas[0][1].norte == "oscuro" || celdas[0][1].norte == "neutro")) {
                celdas[0][1].owner = 0;
                mano[celdas[0][1].indice].setInteractive();
                mano[celdas[0][1].indice].clearTint();
                mano[celdas[0][1].indice].removeInteractive();
                interaccion1(mano, celdas, 0, 1);
            }
            if (celdas[0][0].sur == "sagrado" && (celdas[0][1].norte == "terrenal" || celdas[0][1].norte == "neutro")) {
                celdas[0][1].owner = 0;
                mano[celdas[0][1].indice].setInteractive();
                mano[celdas[0][1].indice].clearTint();
                mano[celdas[0][1].indice].removeInteractive();
                interaccion1(mano, celdas, 0, 1);
            }
            if (celdas[0][0].sur == "oscuro" && (celdas[0][1].norte == "sagrado" || celdas[0][1].norte == "neutro")) {
                celdas[0][1].owner = 0;
                mano[celdas[0][1].indice].setInteractive();
                mano[celdas[0][1].indice].clearTint();
                mano[celdas[0][1].indice].removeInteractive();
                interaccion1(mano, celdas, 0, 1);
            }
        }

    }

    //ESQUINA SUPERIOR DERECHA
    else if (b == 3 && c == 0) {
        if (celdas[2][0].owner != celdas[3][0].owner) {
            if (celdas[3][0].oeste == "terrenal" && (celdas[2][0].este == "oscuro" || celdas[2][0].este == "neutro")) {
                celdas[2][0].owner = 0;
                mano[celdas[2][0].indice].setInteractive();
                mano[celdas[2][0].indice].clearTint();
                mano[celdas[2][0].indice].removeInteractive();
                interaccion1(mano, celdas, 2, 0);
            }
            if (celdas[3][0].oeste == "sagrado" && (celdas[2][0].este == "terrenal" || celdas[2][0].este == "neutro")) {
                celdas[2][0].owner = 0;
                mano[celdas[2][0].indice].setInteractive();
                mano[celdas[2][0].indice].clearTint();
                mano[celdas[2][0].indice].removeInteractive();
                interaccion1(mano, celdas, 2, 0);
            }
            if (celdas[3][0].oeste == "oscuro" && (celdas[2][0].este == "sagrado" || celdas[2][0].este == "neutro")) {
                celdas[2][0].owner = 0;
                mano[celdas[2][0].indice].setInteractive();
                mano[celdas[2][0].indice].clearTint();
                mano[celdas[2][0].indice].removeInteractive();
                interaccion1(mano, celdas, 2, 0);
            }
        }
        if (celdas[3][1].owner != celdas[3][0].owner) {
            if (celdas[3][0].sur == "terrenal" && (celdas[3][1].norte == "oscuro" || celdas[3][1].norte == "neutro")) {
                celdas[3][1].owner = 0;
                mano[celdas[3][1].indice].setInteractive();
                mano[celdas[3][1].indice].clearTint();
                mano[celdas[3][1].indice].removeInteractive();
                interaccion1(mano, celdas, 3, 1);
            }
            if (celdas[3][0].sur == "sagrado" && (celdas[3][1].norte == "terrenal" || celdas[3][1].norte == "neutro")) {
                celdas[3][1].owner = 0;
                mano[celdas[3][1].indice].setInteractive();
                mano[celdas[3][1].indice].clearTint();
                mano[celdas[3][1].indice].removeInteractive();
                interaccion1(mano, celdas, 3, 1);

            }
            if (celdas[3][0].sur == "oscuro" && (celdas[3][1].norte == "sagrado" || celdas[3][1].norte == "neutro")) {
                celdas[3][1].owner = 0;
                mano[celdas[3][1].indice].setInteractive();
                mano[celdas[3][1].indice].clearTint();
                mano[celdas[3][1].indice].removeInteractive();
                interaccion1(mano, celdas, 3, 1);
            }
        }
    }

    //ESQUINA INFERIOR IZQUIERDA

    else if (b == 0 && c == 3) {
        if (celdas[1][3].owner != celdas[0][3].owner) {
            if (celdas[0][3].este == "terrenal" && (celdas[1][3].oeste == "oscuro" || celdas[1][3].oeste == "neutro")) {
                celdas[1][3].owner = 0;
                mano[celdas[1][3].indice].setInteractive();
                mano[celdas[1][3].indice].clearTint();
                mano[celdas[1][3].indice].removeInteractive();
                interaccion1(mano, celdas, 1, 3);
            }
            if (celdas[0][3].este == "sagrado" && (celdas[1][3].oeste == "terrenal" || celdas[1][3].oeste == "neutro")) {
                celdas[1][3].owner = 0;
                mano[celdas[1][3].indice].setInteractive();
                mano[celdas[1][3].indice].clearTint();
                mano[celdas[1][3].indice].removeInteractive();
                interaccion1(mano, celdas, 1, 3);
            }
            if (celdas[0][3].este == "oscuro" && (celdas[1][3].oeste == "sagrado" || celdas[1][3].oeste == "neutro")) {
                celdas[1][3].owner = 0;
                mano[celdas[1][3].indice].setInteractive();
                mano[celdas[1][3].indice].clearTint();
                mano[celdas[1][3].indice].removeInteractive();
                interaccion1(mano, celdas, 1, 3);
            }
        }
        if (celdas[0][2].owner != celdas[0][3].owner) {
            if (celdas[0][3].norte == "terrenal" && (celdas[0][2].sur == "oscuro" || celdas[0][2].sur == "neutro")) {
                celdas[0][2].owner = 0;
                mano[celdas[0][2].indice].setInteractive();
                mano[celdas[0][2].indice].clearTint();
                mano[celdas[0][2].indice].removeInteractive();
                interaccion1(mano, celdas, 0, 2);
            }
            if (celdas[0][3].norte == "sagrado" && (celdas[0][2].sur == "terrenal" || celdas[0][2].sur == "neutro")) {
                celdas[0][2].owner = 0;
                mano[celdas[0][2].indice].setInteractive();
                mano[celdas[0][2].indice].clearTint();
                mano[celdas[0][2].indice].removeInteractive();
                interaccion1(mano, celdas, 0, 2);
            }
            if (celdas[0][3].norte == "oscuro" && (celdas[0][2].sur == "sagrado" || celdas[0][2].sur == "neutro")) {
                celdas[0][2].owner = 0;
                mano[celdas[0][2].indice].setInteractive();
                mano[celdas[0][2].indice].clearTint();
                mano[celdas[0][2].indice].removeInteractive();
                interaccion1(mano, celdas, 0, 2);
            }
        }

    }

    //ESQUINA INFERIOR DERECHA
    else if (b == 3 && c == 3) {
        if (celdas[2][3].owner != celdas[3][3].owner) {
            if (celdas[3][3].oeste == "terrenal" && (celdas[2][3].este == "oscuro" || celdas[2][3].este == "neutro")) {
                celdas[2][3].owner = 0;
                mano[celdas[2][3].indice].setInteractive();
                mano[celdas[2][3].indice].clearTint();
                mano[celdas[2][3].indice].removeInteractive();
                interaccion1(mano, celdas, 2, 3);
            }
            if (celdas[3][3].oeste == "sagrado" && (celdas[2][3].este == "terrenal" || celdas[2][3].este == "neutro")) {
                celdas[2][3].owner = 0;
                mano[celdas[2][3].indice].setInteractive();
                mano[celdas[2][3].indice].clearTint();
                mano[celdas[2][3].indice].removeInteractive();
                interaccion1(mano, celdas, 2, 3);
            }
            if (celdas[3][3].oeste == "oscuro" && (celdas[2][3].este == "sagrado" || celdas[2][3].este == "neutro")) {
                celdas[2][3].owner = 0;
                mano[celdas[2][3].indice].setInteractive();
                mano[celdas[2][3].indice].clearTint();
                mano[celdas[2][3].indice].removeInteractive();
                interaccion1(mano, celdas, 2, 3);
            }
        }
        if (celdas[3][2].owner != celdas[3][3].owner) {
            if (celdas[3][3].norte == "terrenal" && (celdas[3][2].sur == "oscuro" || celdas[3][2].sur == "neutro")) {
                celdas[3][2].owner = 0;
                mano[celdas[3][2].indice].setInteractive();
                mano[celdas[3][2].indice].clearTint();
                mano[celdas[3][2].indice].removeInteractive();
                interaccion1(mano, celdas, 3, 2);
            }
            if (celdas[3][3].norte == "sagrado" && (celdas[3][2].sur == "terrenal" || celdas[3][2].sur == "neutro")) {
                celdas[3][2].owner = 0;
                mano[celdas[3][2].indice].setInteractive();
                mano[celdas[3][2].indice].clearTint();
                mano[celdas[3][2].indice].removeInteractive();
                interaccion1(mano, celdas, 3, 2);
            }
            if (celdas[3][3].norte == "oscuro" && (celdas[3][2].sur == "sagrado" || celdas[3][2].sur == "neutro")) {
                celdas[3][2].owner = 0;
                mano[celdas[3][2].indice].setInteractive();
                mano[celdas[3][2].indice].clearTint();
                mano[celdas[3][2].indice].removeInteractive();
                interaccion1(mano, celdas, 3, 2);
            }
        }
    }

    //LADO SUPERIOR
    else if ((b == 1 || b == 2) && c == 0) {
        if (celdas[b - 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
        }
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
        }
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].norte == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
        }
    }

    //LADO INFERIOR
    else if (c == 3 && (b == 1 || b == 2)) {
        //Interaccion1 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);

            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);

            }
        }
        //Interaccion1 con la derecha
        if (celdas[b][c].owner != celdas[b + 1][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);

            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
        }
    }



    //LADO IZQUIERDO
    else if (b == 0 && (c == 1 || c == 2)) {
        if (celdas[b][c - 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
        }
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].norte == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
        }
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
        }
    }

    //LADO DERECHO
    else if (b == 3 && (c == 1 || c == 2)) {
        //Interaccion1 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
        }
        //Interaccion1 con sur
        if (celdas[b][c + 1].owner != celdas[b][c + 1].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].oeste == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].oeste == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
        }
    }

    //RESTO
    else {
        //Interaccion1 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 0;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].clearTint();
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b - 1, c);
            }
        }
        //Interaccion1 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 0;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].clearTint();
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c - 1);
            }
        }
        //Interaccion1 con sur
        if (celdas[b][c + 1].owner != celdas[b][c + 1].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].oeste == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].oeste == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 0;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].clearTint();
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion1(mano, celdas, b, c + 1);
            }
        }
        //Interaccion1 con la derecha
        if (celdas[b][c].owner != celdas[b + 1][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 0;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].clearTint();
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion1(mano, celdas, b + 1, c);
            }
        }
    }

}





function interaccion2(mano, celdas, b, c) {

    if (b == 0 && c == 0) {
        if (celdas[1][0].owner != celdas[0][0].owner) {
            if (celdas[0][0].este == "terrenal" && (celdas[1][0].oeste == "oscuro" || celdas[1][0].oeste == "neutro")) {
                celdas[1][0].owner = 1;
                mano[celdas[1][0].indice].setInteractive();
                mano[celdas[1][0].indice].setTint(0xfc8987);
                mano[celdas[1][0].indice].removeInteractive();
                interaccion2(mano, celdas, 1, 0);
            }
            if (celdas[0][0].este == "sagrado" && (celdas[1][0].oeste == "terrenal" || celdas[1][0].oeste == "neutro")) {
                celdas[1][0].owner = 1;
                mano[celdas[1][0].indice].setInteractive();
                mano[celdas[1][0].indice].setTint(0xfc8987);
                mano[celdas[1][0].indice].removeInteractive();
                interaccion2(mano, celdas, 1, 0);
            }
            if (celdas[0][0].este == "oscuro" && (celdas[1][0].oeste == "sagrado" || celdas[1][0].oeste == "neutro")) {
                celdas[1][0].owner = 1;
                mano[celdas[1][0].indice].setInteractive();
                mano[celdas[1][0].indice].setTint(0xfc8987);
                mano[celdas[1][0].indice].removeInteractive();
                interaccion2(mano, celdas, 1, 0);
            }
        }
        if (celdas[0][1].owner != celdas[0][0].owner) {
            if (celdas[0][0].sur == "terrenal" && (celdas[0][1].norte == "oscuro" || celdas[0][1].norte == "neutro")) {
                celdas[0][1].owner = 1;
                mano[celdas[0][1].indice].setInteractive();
                mano[celdas[0][1].indice].setTint(0xfc8987);
                mano[celdas[0][1].indice].removeInteractive();
                interaccion2(mano, celdas, 0, 1);
            }
            if (celdas[0][0].sur == "sagrado" && (celdas[0][1].norte == "terrenal" || celdas[0][1].norte == "neutro")) {
                celdas[0][1].owner = 1;
                mano[celdas[0][1].indice].setInteractive();
                mano[celdas[0][1].indice].setTint(0xfc8987);
                mano[celdas[0][1].indice].removeInteractive();
                interaccion2(mano, celdas, 0, 1);
            }
            if (celdas[0][0].sur == "oscuro" && (celdas[0][1].norte == "sagrado" || celdas[0][1].norte == "neutro")) {
                celdas[0][1].owner = 1;
                mano[celdas[0][1].indice].setInteractive();
                mano[celdas[0][1].indice].setTint(0xfc8987);
                mano[celdas[0][1].indice].removeInteractive();
                interaccion2(mano, celdas, 0, 1);
            }
        }

    }

    //ESQUINA SUPERIOR DERECHA
    else if (b == 3 && c == 0) {
        if (celdas[2][0].owner != celdas[3][0].owner) {
            if (celdas[3][0].oeste == "terrenal" && (celdas[2][0].este == "oscuro" || celdas[2][0].este == "neutro")) {
                celdas[2][0].owner = 1;
                mano[celdas[2][0].indice].setInteractive();
                mano[celdas[2][0].indice].setTint(0xfc8987);
                mano[celdas[2][0].indice].removeInteractive();
                interaccion2(mano, celdas, 2, 0);
            }
            if (celdas[3][0].oeste == "sagrado" && (celdas[2][0].este == "terrenal" || celdas[2][0].este == "neutro")) {
                celdas[2][0].owner = 1;
                mano[celdas[2][0].indice].setInteractive();
                mano[celdas[2][0].indice].setTint(0xfc8987);
                mano[celdas[2][0].indice].removeInteractive();
                interaccion2(mano, celdas, 2, 0);
            }
            if (celdas[3][0].oeste == "oscuro" && (celdas[2][0].este == "sagrado" || celdas[2][0].este == "neutro")) {
                celdas[2][0].owner = 1;
                mano[celdas[2][0].indice].setInteractive();
                mano[celdas[2][0].indice].setTint(0xfc8987);
                mano[celdas[2][0].indice].removeInteractive();
                interaccion2(mano, celdas, 2, 0);
            }
        }
        if (celdas[3][1].owner != celdas[3][0].owner) {
            if (celdas[3][0].sur == "terrenal" && (celdas[3][1].norte == "oscuro" || celdas[3][1].norte == "neutro")) {
                celdas[3][1].owner = 1;
                mano[celdas[3][1].indice].setInteractive();
                mano[celdas[3][1].indice].setTint(0xfc8987);
                mano[celdas[3][1].indice].removeInteractive();
                interaccion2(mano, celdas, 3, 1);
            }
            if (celdas[3][0].sur == "sagrado" && (celdas[3][1].norte == "terrenal" || celdas[3][1].norte == "neutro")) {
                celdas[3][1].owner = 1;
                mano[celdas[3][1].indice].setInteractive();
                mano[celdas[3][1].indice].setTint(0xfc8987);
                mano[celdas[3][1].indice].removeInteractive();
                interaccion2(mano, celdas, 3, 1);

            }
            if (celdas[3][0].sur == "oscuro" && (celdas[3][1].norte == "sagrado" || celdas[3][1].norte == "neutro")) {
                celdas[3][1].owner = 1;
                mano[celdas[3][1].indice].setInteractive();
                mano[celdas[3][1].indice].setTint(0xfc8987);
                mano[celdas[3][1].indice].removeInteractive();
                interaccion2(mano, celdas, 3, 1);
            }
        }
    }

    //ESQUINA INFERIOR IZQUIERDA

    else if (b == 0 && c == 3) {
        if (celdas[1][3].owner != celdas[0][3].owner) {
            if (celdas[0][3].este == "terrenal" && (celdas[1][3].oeste == "oscuro" || celdas[1][3].oeste == "neutro")) {
                celdas[1][3].owner = 1;
                mano[celdas[1][3].indice].setInteractive();
                mano[celdas[1][3].indice].setTint(0xfc8987);
                mano[celdas[1][3].indice].removeInteractive();
                interaccion2(mano, celdas, 1, 3);
            }
            if (celdas[0][3].este == "sagrado" && (celdas[1][3].oeste == "terrenal" || celdas[1][3].oeste == "neutro")) {
                celdas[1][3].owner = 1;
                mano[celdas[1][3].indice].setInteractive();
                mano[celdas[1][3].indice].setTint(0xfc8987);
                mano[celdas[1][3].indice].removeInteractive();
                interaccion2(mano, celdas, 1, 3);
            }
            if (celdas[0][3].este == "oscuro" && (celdas[1][3].oeste == "sagrado" || celdas[1][3].oeste == "neutro")) {
                celdas[1][3].owner = 1;
                mano[celdas[1][3].indice].setInteractive();
                mano[celdas[1][3].indice].setTint(0xfc8987);
                mano[celdas[1][3].indice].removeInteractive();
                interaccion2(mano, celdas, 1, 3);
            }
        }
        if (celdas[0][2].owner != celdas[0][3].owner) {
            if (celdas[0][3].norte == "terrenal" && (celdas[0][2].sur == "oscuro" || celdas[0][2].sur == "neutro")) {
                celdas[0][2].owner = 1;
                mano[celdas[0][2].indice].setInteractive();
                mano[celdas[0][2].indice].setTint(0xfc8987);
                mano[celdas[0][2].indice].removeInteractive();
                interaccion2(mano, celdas, 0, 2);
            }
            if (celdas[0][3].norte == "sagrado" && (celdas[0][2].sur == "terrenal" || celdas[0][2].sur == "neutro")) {
                celdas[0][2].owner = 1;
                mano[celdas[0][2].indice].setInteractive();
                mano[celdas[0][2].indice].setTint(0xfc8987);
                mano[celdas[0][2].indice].removeInteractive();
                interaccion2(mano, celdas, 0, 2);
            }
            if (celdas[0][3].norte == "oscuro" && (celdas[0][2].sur == "sagrado" || celdas[0][2].sur == "neutro")) {
                celdas[0][2].owner = 1;
                mano[celdas[0][2].indice].setInteractive();
                mano[celdas[0][2].indice].setTint(0xfc8987);
                mano[celdas[0][2].indice].removeInteractive();
                interaccion2(mano, celdas, 0, 2);
            }
        }

    }

    //ESQUINA INFERIOR DERECHA
    else if (b == 3 && c == 3) {
        if (celdas[2][3].owner != celdas[3][3].owner) {
            if (celdas[3][3].oeste == "terrenal" && (celdas[2][3].este == "oscuro" || celdas[2][3].este == "neutro")) {
                celdas[2][3].owner = 1;
                mano[celdas[2][3].indice].setInteractive();
                mano[celdas[2][3].indice].setTint(0xfc8987);
                mano[celdas[2][3].indice].removeInteractive();
                interaccion2(mano, celdas, 2, 3);
            }
            if (celdas[3][3].oeste == "sagrado" && (celdas[2][3].este == "terrenal" || celdas[2][3].este == "neutro")) {
                celdas[2][3].owner = 1;
                mano[celdas[2][3].indice].setInteractive();
                mano[celdas[2][3].indice].setTint(0xfc8987);
                mano[celdas[2][3].indice].removeInteractive();
                interaccion2(mano, celdas, 2, 3);
            }
            if (celdas[3][3].oeste == "oscuro" && (celdas[2][3].este == "sagrado" || celdas[2][3].este == "neutro")) {
                celdas[2][3].owner = 1;
                mano[celdas[2][3].indice].setInteractive();
                mano[celdas[2][3].indice].setTint(0xfc8987);
                mano[celdas[2][3].indice].removeInteractive();
                interaccion2(mano, celdas, 2, 3);
            }
        }
        if (celdas[3][2].owner != celdas[3][3].owner) {
            if (celdas[3][3].norte == "terrenal" && (celdas[3][2].sur == "oscuro" || celdas[3][2].sur == "neutro")) {
                celdas[3][2].owner = 1;
                mano[celdas[3][2].indice].setInteractive();
                mano[celdas[3][2].indice].setTint(0xfc8987);
                mano[celdas[3][2].indice].removeInteractive();
                interaccion2(mano, celdas, 3, 2);
            }
            if (celdas[3][3].norte == "sagrado" && (celdas[3][2].sur == "terrenal" || celdas[3][2].sur == "neutro")) {
                celdas[3][2].owner = 1;
                mano[celdas[3][2].indice].setInteractive();
                mano[celdas[3][2].indice].setTint(0xfc8987);
                mano[celdas[3][2].indice].removeInteractive();
                interaccion2(mano, celdas, 3, 2);
            }
            if (celdas[3][3].norte == "oscuro" && (celdas[3][2].sur == "sagrado" || celdas[3][2].sur == "neutro")) {
                celdas[3][2].owner = 1;
                mano[celdas[3][2].indice].setInteractive();
                mano[celdas[3][2].indice].setTint(0xfc8987);
                mano[celdas[3][2].indice].removeInteractive();
                interaccion2(mano, celdas, 3, 2);
            }
        }
    }

    //LADO SUPERIOR
    else if ((b == 1 || b == 2) && c == 0) {
        if (celdas[b - 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
        }
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
        }
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].norte == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
        }
    }

    //LADO INFERIOR
    else if (c == 3 && (b == 1 || b == 2)) {
        //Interaccion2 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);

            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);

            }
        }
        //Interaccion2 con la derecha
        if (celdas[b][c].owner != celdas[b + 1][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);

            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
        }
        //Interaccion2 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
        }
    }



    //LADO IZQUIERDO
    else if (b == 0 && (c == 1 || c == 2)) {
        if (celdas[b][c - 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
        }
        if (celdas[b][c + 1].owner != celdas[b][c].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].norte == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].norte == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
        }
        if (celdas[b + 1][c].owner != celdas[b][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
        }
    }

    //LADO DERECHO
    else if (b == 3 && (c == 1 || c == 2)) {
        //Interaccion2 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
        }
        //Interaccion2 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
        }
        //Interaccion2 con sur
        if (celdas[b][c + 1].owner != celdas[b][c + 1].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].oeste == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].oeste == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
        }
    }

    //RESTO
    else {
        //Interaccion2 con la izquierda
        if (celdas[b][c].owner != celdas[b - 1][c].owner) {
            if (celdas[b][c].oeste == "terrenal" && (celdas[b - 1][c].este == "oscuro" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "sagrado" && (celdas[b - 1][c].este == "terrenal" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
            if (celdas[b][c].oeste == "oscuro" && (celdas[b - 1][c].este == "sagrado" || celdas[b - 1][c].este == "neutro")) {
                celdas[b - 1][c].owner = 1;
                mano[celdas[b - 1][c].indice].setInteractive();
                mano[celdas[b - 1][c].indice].setTint(0xfc8987);
                mano[celdas[b - 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b - 1, c);
            }
        }
        //Interaccion2 con norte
        if (celdas[b][c].owner != celdas[b][c - 1].owner) {
            if (celdas[b][c].norte == "terrenal" && (celdas[b][c - 1].sur == "oscuro" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "sagrado" && (celdas[b][c - 1].sur == "terrenal" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
            if (celdas[b][c].norte == "oscuro" && (celdas[b][c - 1].sur == "sagrado" || celdas[b][c - 1].sur == "neutro")) {
                celdas[b][c - 1].owner = 1;
                mano[celdas[b][c - 1].indice].setInteractive();
                mano[celdas[b][c - 1].indice].setTint(0xfc8987);
                mano[celdas[b][c - 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c - 1);
            }
        }
        //Interaccion2 con sur
        if (celdas[b][c + 1].owner != celdas[b][c + 1].owner) {
            if (celdas[b][c].sur == "terrenal" && (celdas[b][c + 1].norte == "oscuro" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "sagrado" && (celdas[b][c + 1].oeste == "terrenal" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
            if (celdas[b][c].sur == "oscuro" && (celdas[b][c + 1].oeste == "sagrado" || celdas[b][c + 1].norte == "neutro")) {
                celdas[b][c + 1].owner = 1;
                mano[celdas[b][c + 1].indice].setInteractive();
                mano[celdas[b][c + 1].indice].setTint(0xfc8987);
                mano[celdas[b][c + 1].indice].removeInteractive();
                interaccion2(mano, celdas, b, c + 1);
            }
        }
        //Interaccion2 con la derecha
        if (celdas[b][c].owner != celdas[b + 1][c].owner) {
            if (celdas[b][c].este == "terrenal" && (celdas[b + 1][c].oeste == "oscuro" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "sagrado" && (celdas[b + 1][c].oeste == "terrenal" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
            if (celdas[b][c].este == "oscuro" && (celdas[b + 1][c].oeste == "sagrado" || celdas[b + 1][c].oeste == "neutro")) {
                celdas[b + 1][c].owner = 1;
                mano[celdas[b + 1][c].indice].setInteractive();
                mano[celdas[b + 1][c].indice].setTint(0xfc8987);
                mano[celdas[b + 1][c].indice].removeInteractive();
                interaccion2(mano, celdas, b + 1, c);
            }
        }
    }

}






