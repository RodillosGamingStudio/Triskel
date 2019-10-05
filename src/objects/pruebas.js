 //ESQUINA SUPERIOR IZQUIERDA
 if (b2 == 0 && c2 == 0) {
    if (celdas[1][0].owner != celdas[0][0].owner) {
        if (celdas[0][0].este == "terrenal" && (celdas[1][0].oeste == "oscuro" || celdas[1][0].oeste == "neutro")) {
            celdas[1][0].owner = 0;
            mano1[celdas[1][0].indice].setInteractive();
            mano1[celdas[1][0].indice].clearTint();
            mano1[celdas[1][0].indice].removeInteractive();
        }
        if (celdas[0][0].este == "sagrado" && (celdas[1][0].oeste == "terrenal" || celdas[1][0].oeste == "neutro")) {
            celdas[1][0].owner = 0;
            mano1[celdas[1][0].indice].setInteractive();
            mano1[celdas[1][0].indice].clearTint();
            mano1[celdas[1][0].indice].removeInteractive();
        }
        if (celdas[0][0].este == "oscuro" && (celdas[1][0].oeste == "sagrado" || celdas[1][0].oeste == "neutro")) {
            celdas[1][0].owner = 0;
            mano1[celdas[1][0].indice].setInteractive();
            mano1[celdas[1][0].indice].clearTint();
            mano1[celdas[1][0].indice].removeInteractive();
        }
    }
    if (celdas[0][1].owner != celdas[0][0].owner) {
        if (celdas[0][0].sur == "terrenal" && (celdas[0][1].norte == "oscuro" || celdas[0][1].norte == "neutro")) {
            celdas[0][1].owner = 0;
            mano1[celdas[0][1].indice].setInteractive();
            mano1[celdas[0][1].indice].clearTint();
            mano1[celdas[0][1].indice].removeInteractive();
        }
        if (celdas[0][0].sur == "sagrado" && (celdas[0][1].norte == "terrenal" || celdas[0][1].norte == "neutro")) {
            celdas[0][1].owner = 0;
            mano1[celdas[0][1].indice].setInteractive();
            mano1[celdas[0][1].indice].clearTint();
            mano1[celdas[0][1].indice].removeInteractive();
        }
        if (celdas[0][0].sur == "oscuro" && (celdas[0][1].norte == "sagrado" || celdas[0][1].norte == "neutro")) {
            celdas[0][1].owner = 0;
            mano1[celdas[0][1].indice].setInteractive();
            mano1[celdas[0][1].indice].clearTint();
            mano1[celdas[0][1].indice].removeInteractive();
        }
    }

}

//ESQUINA SUPERIOR DERECHA
else if (b2 == 3 && c2 == 0) {
    if (celdas[2][0].owner != celdas[3][0].owner) {
        if (celdas[3][0].oeste == "terrenal" && (celdas[2][0].este == "oscuro" || celdas[2][0].este == "neutro")) {
            celdas[2][0].owner = 0;
        }
        if (celdas[3][0].oeste == "sagrado" && (celdas[2][0].este == "terrenal" || celdas[2][0].este == "neutro")) {
            celdas[2][0].owner = 0;
        }
        if (celdas[3][0].oeste == "oscuro" && (celdas[2][0].este == "sagrado" || celdas[2][0].este == "neutro")) {
            celdas[2][0].owner = 0;
        }
    }
    if (celdas[3][1].owner != celdas[3][0].owner) {
        if (celdas[3][0].sur == "terrenal" && (celdas[3][1].norte == "oscuro" || celdas[3][1].norte == "neutro")) {
            celdas[3][1].owner = 0;
        }
        if (celdas[3][0].sur == "sagrado" && (celdas[3][1].norte == "terrenal" || celdas[3][1].norte == "neutro")) {
            celdas[3][1].owner = 0;
        }
        if (celdas[3][0].sur == "oscuro" && (celdas[3][1].norte == "sagrado" || celdas[3][1].norte == "neutro")) {
            celdas[3][1].owner = 0;
        }
    }
}

//ESQUINA INFERIOR IZQUIERDA

else if (b2 == 0 && c2 == 3) {
    if (celdas[1][3].owner != celdas[0][3].owner) {
        if (celdas[0][3].este == "terrenal" && (celdas[1][3].oeste == "oscuro" || celdas[1][3].oeste == "neutro")) {
            celdas[1][3].owner = 0;
        }
        if (celdas[0][3].este == "sagrado" && (celdas[1][3].oeste == "terrenal" || celdas[1][3].oeste == "neutro")) {
            celdas[1][3].owner = 0;
        }
        if (celdas[0][3].este == "oscuro" && (celdas[1][3].oeste == "sagrado" || celdas[1][3].oeste == "neutro")) {
            celdas[1][3].owner = 0;
        }
    }
    if (celdas[0][2].owner != celdas[0][3].owner) {
        if (celdas[0][3].norte == "terrenal" && (celdas[0][2].sur == "oscuro" || celdas[0][2].sur == "neutro")) {
            celdas[0][2].owner = 0;
        }
        if (celdas[0][3].norte == "sagrado" && (celdas[0][2].sur == "terrenal" || celdas[0][2].sur == "neutro")) {
            celdas[0][2].owner = 0;
        }
        if (celdas[0][3].norte == "oscuro" && (celdas[0][2].sur == "sagrado" || celdas[0][2].sur == "neutro")) {
            celdas[0][2].owner = 0;
        }
    }

}

//ESQUINA INFERIOR DERECHA
else if (b2 == 3 && c2 == 3) {
    if (celdas[2][3].owner != celdas[3][3].owner) {
        if (celdas[3][3].oeste == "terrenal" && (celdas[2][3].este == "oscuro" || celdas[2][3].este == "neutro")) {
            celdas[2][3].owner = 0;
        }
        if (celdas[3][3].oeste == "sagrado" && (celdas[2][3].este == "terrenal" || celdas[2][3].este == "neutro")) {
            celdas[2][3].owner = 0;
        }
        if (celdas[3][3].oeste == "oscuro" && (celdas[2][3].este == "sagrado" || celdas[2][3].este == "neutro")) {
            celdas[2][3].owner = 0;
        }
    }
    if (celdas[3][2].owner != celdas[3][3].owner) {
        if (celdas[3][3].norte == "terrenal" && (celdas[2][3].sur == "oscuro" || celdas[2][3].sur == "neutro")) {
            celdas[2][3].owner = 0;
        }
        if (celdas[3][3].norte == "sagrado" && (celdas[2][3].sur == "terrenal" || celdas[2][3].sur == "neutro")) {
            celdas[2][3].owner = 0;
        }
        if (celdas[3][3].norte == "oscuro" && (celdas[2][3].sur == "sagrado" || celdas[2][3].sur == "neutro")) {
            celdas[2][3].owner = 0;
        }
    }
}

//LADO SUPERIOR
else if ((b2 == 1 || b2 == 2) && c2 == 0) {
    if (celdas[b2 - 1][c2].owner != celdas[b2][c2].owner) {
        if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
    }
    if (celdas[b2 + 1][c2].owner != celdas[b2][c2].owner) {
        if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
    }
    if (celdas[b2][c2 + 1].owner != celdas[b2][c2].owner) {
        if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].norte == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].norte == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
    }
}

//LADO INFERIOR
else if (c2 == 3 && (b2 == 1 || b2 == 2)) {
    //Interaccion con la izquierda
    if (celdas[b2][c2].owner != celdas[b2 - 1][c2].owner) {
        if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
    }
    //Interaccion con la derecha
    if (celdas[b2][c2].owner != celdas[b2 + 1][c2].owner) {
        if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
    }
    //Interaccion con norte
    if (celdas[b2][c2].owner != celdas[b2][c2 - 1].owner) {
        if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
    }
}


//LADO IZQUIERDO
else if (b2 == 0 && (c2 == 1 || c2 == 2)) {
    if (celdas[b2][c2 - 1].owner != celdas[b2][c2].owner) {
        if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
    }
    if (celdas[b2][c2 + 1].owner != celdas[b2][c2].owner) {
        if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].norte == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].norte == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
    }
    if (celdas[b2 + 1][c2].owner != celdas[b2][c2].owner) {
        if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
    }
}

//LADO DERECHO
else if (b2 == 3 && (c2 == 1 || c2 == 2)) {
    //Interaccion con la izquierda
    if (celdas[b2][c2].owner != celdas[b2 - 1][c2].owner) {
        if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
    }
    //Interaccion con norte
    if (celdas[b2][c2].owner != celdas[b2][c2 - 1].owner) {
        if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
    }
    //Interaccion con sur
    if (celdas[b2][c2 + 1].owner != celdas[b2][c2 + 1].owner) {
        if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].oeste == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].oeste == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
    }
}

//RESTO
else {
    //Interaccion con la izquierda
    if (celdas[b2][c2].owner != celdas[b2 - 1][c2].owner) {
        if (celdas[b2][c2].oeste == "terrenal" && (celdas[b2 - 1][c2].este == "oscuro" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "sagrado" && (celdas[b2 - 1][c2].este == "terrenal" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
        if (celdas[b2][c2].oeste == "oscuro" && (celdas[b2 - 1][c2].este == "sagrado" || celdas[b2 - 1][c2].este == "neutro")) {
            celdas[b2 - 1][c2].owner = 0;
        }
    }
    //Interaccion con norte
    if (celdas[b2][c2].owner != celdas[b2][c2 - 1].owner) {
        if (celdas[b2][c2].norte == "terrenal" && (celdas[b2][c2 - 1].sur == "oscuro" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "sagrado" && (celdas[b2][c2 - 1].sur == "terrenal" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
        if (celdas[b2][c2].norte == "oscuro" && (celdas[b2][c2 - 1].sur == "sagrado" || celdas[b2][c2 - 1].sur == "neutro")) {
            celdas[b2][c2 - 1].owner = 0;
        }
    }
    //Interaccion con sur
    if (celdas[b2][c2 + 1].owner != celdas[b2][c2 + 1].owner) {
        if (celdas[b2][c2].sur == "terrenal" && (celdas[b2][c2 + 1].norte == "oscuro" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "sagrado" && (celdas[b2][c2 + 1].oeste == "terrenal" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
        if (celdas[b2][c2].sur == "oscuro" && (celdas[b2][c2 + 1].oeste == "sagrado" || celdas[b2][c2 + 1].norte == "neutro")) {
            celdas[b2][c2 + 1].owner = 0;
        }
    }
    //Interaccion con la derecha
    if (celdas[b2][c2].owner != celdas[b2 + 1][c2].owner) {
        if (celdas[b2][c2].este == "terrenal" && (celdas[b2 + 1][c2].oeste == "oscuro" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "sagrado" && (celdas[b2 + 1][c2].oeste == "terrenal" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
        if (celdas[b2][c2].este == "oscuro" && (celdas[b2 + 1][c2].oeste == "sagrado" || celdas[b2 + 1][c2].oeste == "neutro")) {
            celdas[b2 + 1][c2].owner = 0;
        }
    }
}