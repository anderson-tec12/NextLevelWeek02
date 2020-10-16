import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import styles from "./style";

import landingImg from "../../assets/images/landing.png";
import giveImg from "../../assets/images/icons/give-classes.png";
import studyImg from "../../assets/images/icons/study.png";
import heartImg from "../../assets/images/icons/heart.png";

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        {" "}
        Seja bem vindo! {"\n"}
        <Text style={styles.titleBold}> O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyImg} />

          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveImg} />
          <Text style={styles.buttonText}>Dar aula</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        total de 20 conexões ja realizadas{"  "} <Image source={heartImg} />
      </Text>
    </View>
  );
};

export default Landing;
