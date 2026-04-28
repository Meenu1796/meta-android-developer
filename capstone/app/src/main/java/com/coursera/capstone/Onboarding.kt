package com.coursera.capstone

import android.provider.CalendarContract
import androidx.compose.foundation.Image
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ColorScheme
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.input.TextFieldValue
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Composable
fun Onboarding() {
    val context = LocalContext.current
    var firstname by remember {
        mutableStateOf(TextFieldValue(""))
    }
    var lastname by remember {
        mutableStateOf(TextFieldValue(""))
    }
    var email by remember {
        mutableStateOf(TextFieldValue(""))
    }
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
        modifier = Modifier.padding(20.dp)
    ) {
        Image(
            modifier = Modifier.width(100.dp).height(100.dp),
            painter = painterResource(id = R.drawable.logo),
            contentDescription = "Logo"
        )
        Text(text="Let's get to know you", modifier = Modifier.padding(10.dp),)
        TextField(
            value = firstname,
            onValueChange = {firstname = it},
            label = {Text(text = "First name") },
            modifier = Modifier.padding(10.dp),
        )
        TextField(
            value = lastname,
            onValueChange = {lastname = it},
            label = {Text(text = "Last name") },
            modifier = Modifier.padding(10.dp),
        )
        TextField(
            value = email,
            onValueChange = {email = it},
            label = {Text(text = "Password") },
            modifier = Modifier.padding(10.dp),
        )
        Button(
            onClick = {},
            colors = ButtonDefaults.buttonColors(
                Color(0xFF495E57)
            ),
        ) {
            Text(text = "Button", color = Color(0xFFEDEFEE))
        }
    }
}

@Preview(showBackground = true)
@Composable
fun OnboardingPreview() {
    Onboarding()
}