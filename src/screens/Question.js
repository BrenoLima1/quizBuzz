// 50 minutes

import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { React, useState, useEffect } from "react";
import { OPQuestions } from "../config/question";
import tw from "twrnc";

const Questions = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [disableOptions, setDisableOptions] = useState(false);

  console.log(score);
  console.log({isCorrect});

  useEffect(() => {
    if (selectedOption) {
      const isAnswerCorrect =
      OPQuestions[currentQuestionIndex].answer === selectedOption;

      setIsCorrect(isAnswerCorrect);

      if (isAnswerCorrect) {
        setScore((prevScore) => prevScore + 10);
      }

      setDisableOptions(true);
    }
  }, [selectedOption]);

  const handleNext = () => {
    if (currentQuestionIndex === OPQuestions.length - 1) {
      // return;

    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setIsCorrect(null);
      setDisableOptions(false);
    }
  };

  // handle pressed option
  const handleOptionPress = (pressedOption) => {
    setSelectedOption(pressedOption);
  };

  return (
    <View style={tw`mt-6 p-4`}>
      <Text style={tw`text-2xl mb-4`}>
        {OPQuestions[currentQuestionIndex].question}
      </Text>
      {OPQuestions[currentQuestionIndex].options.map((option) => {
        return (
          <View key={option}>
            <Pressable
              style={tw`border-2 border-purple-500 p-4 my-2 rounded-md ${
                selectedOption === option
                  ? isCorrect
                    ? "bg-green-200 border-green-500"
                    : "bg-red-200 border-red-500"
                  : "border-purple-500"
              }`}
              onPress={() => handleOptionPress(option)}
              disabled={disableOptions}
            >
              <Text style={tw`text-lg`}>{option}</Text>
            </Pressable>
          </View>
        );
      })}

      <Pressable
        style={tw`bg-purple-500 p-2 rounded-md mt-6`}
        onPress={handleNext}
      >
        <Text style={tw`text-white text-lg text-center font-bold`}>Next</Text>
      </Pressable>
    </View>
  );
};

export default Questions;

const styles = StyleSheet.create({});





// import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
// import { React, useState } from "react";
// import { OPQuestions } from "../config/question";
// import tw from "twrnc";

// const Questions = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isCorrect, setIsCorrect] = useState(null);

//   // console.log({ selectedOption
//   console.log({ isCorrect });

//   const handleNext = () => {
//     if (currentQuestionIndex === OPQuestions.length - 1) {
//       return;
//     }else {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setSelectedOption(null);
//     setIsCorrect(null);
//     }
//   };

//   // handle pressed option
//   const handleOptionPress = (pressedOption) => {
//     setSelectedOption(pressedOption);

//     const isAnswerCorrect =
//       OPQuestions[currentQuestionIndex].answer === pressedOption;

//     setIsCorrect(isAnswerCorrect);

//     if (isAnswerCorrect) {
//       setScore((prevScore) => prevScore + 10);
//     }
//   };

//   return (
//     <View style={tw`mt-6 p-4`}>
//       <Text style={tw`text-2xl mb-4`}>
//         {OPQuestions[currentQuestionIndex].question}
//       </Text>
//       {OPQuestions[currentQuestionIndex].options.map((option) => {
//         return (
//           <View key={option}>
//             <Pressable
//               style={tw`border-2 border-purple-500 p-4 my-2 rounded-md ${
//                 selectedOption === option
//                 ? isCorrect
//                 ? "bg-green-200 border-green-500"
//                 : "bg-red-200 border-red-500"
//                 : "border-purple-500"
//               }`}
//               onPress={() => handleOptionPress(option)}
//               disabled={selectedOption}
//             >
//               <Text style={tw`text-lg`}>{option}</Text>
//             </Pressable>
//           </View>
//         );
//       })}

//       <Pressable
//         style={tw`bg-purple-500 p-2 rounded-md mt-6`}
//         onPress={handleNext}
//       >
//         <Text style={tw`text-white text-lg text-center font-bold`}>Next</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default Questions;

// const styles = StyleSheet.create({});
